import to from 'await-to-js'
import { APPLICATION_ID } from 'src/config/api'
import { http } from 'src/shared/services/network'
import { getData, isIn, groupBy } from 'src/shared/utils'

const getMarketNewsData = marketId => res => ({
  ...res.data,
  marketId
})

const self = {
  async fetchMarkets(user) {
    const [err, data] = await to(
      Promise.all([
        http.get(`users/${user.id}/markets-search`).then(getData),
        http.get(`accounts/${user.account.id}/watchlist`).then(getData)
      ])
    )
    if (err) {
      throw err
    }
    const [markets, watchlistMarkets] = data
    const marketsWithFollowing = markets.map(market => ({
      ...market,
      following: isIn({
        item: market,
        items: watchlistMarkets
      })
    }))
    return groupBy(marketsWithFollowing, 'id')
  },
  addMarketToWatchlist({ user, payload }) {
    const { following, market } = payload
    return http
      .put(`accounts/${user.account.id}/watchlist/${market.id}`, {
        following
      })
      .then(() => ({
        ...market,
        following
      }))
  },
  async fetchMarket({ user, market }) {
    const [err, data] = await to(
      Promise.all([
        http.get(`users/${user.id}/markets/${market.id}`).then(getData),
        self.fetchMarketNews({ market }),
        self.fetchMarketCharts({ user, market })
      ])
    )
    if (err) {
      throw err
    }
    const [fullMarket, news, charts] = data
    return {
      ...fullMarket,
      ...market,
      news,
      charts
    }
  },
  fetchMarketNews({ market, offset = 0 }) {
    const params = {
      limit: 5,
      offset,
      tags: market.instrumentId.toLowerCase()
    }
    return http
      .get(`applications/${APPLICATION_ID}/news/coinpulse`, { params })
      .then(getMarketNewsData(market.id))
  },
  fetchMarketCharts({ user, market }) {
    return http
      .get(`users/${user.id}/markets/${market.id}/charts?interval=1d`)
      .then(getData)
  }
}

export default self
