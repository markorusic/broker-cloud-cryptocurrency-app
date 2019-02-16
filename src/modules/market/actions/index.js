import { createAsyncAction } from 'src/shared/utils/redux'
import { getUser } from 'src/modules/auth/selectors'
import { getMarketById } from '../selectors'
import marketService from '../marketService'

export const fetchMarkets = createAsyncAction(
  'FETCH_MARKETS',
  (dispatch, getState) => {
    const user = getUser(getState())
    return marketService.fetchMarkets(user)
  }
)

export const addMarketToWatchlist = createAsyncAction(
  'ADD_MARKET_WATCHLIST',
  (payload, dispatch, getState) => {
    const user = getUser(getState())
    return marketService.addMarketToWatchlist({ user, payload })
  }
)

export const fetchFullMarket = createAsyncAction(
  'FETCH_FULL_MARKET',
  (market, dispatch, getState) => {
    const user = getUser(getState())
    return marketService.fetchMarket({ user, market })
  }
)

export const fetchMarketNews = createAsyncAction(
  'FETCH_MARKET_NEWS',
  (market, dispatch, getState) => {
    const fullMarket = getMarketById(market.id)(getState())
    const offset = fullMarket.news.count - fullMarket.news.results.length
    return marketService.fetchMarketNews({ market, offset })
  }
)
