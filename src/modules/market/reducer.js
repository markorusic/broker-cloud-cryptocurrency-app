import { merge } from 'src/shared/utils'
// import { getMarkets } from './selectors'
import {
  FETCH_MARKETS,
  ADD_MARKET_WATCHLIST,
  FETCH_FULL_MARKET,
  FETCH_MARKET_NEWS
} from './actions/actionTypes'

const INITIAL_STATE = {
  markets: {},
  marketsLoading: false,
  marketsLoadingError: null,
  singleMarketLoading: false,
  singleMarketLoadingError: null
}

const marketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MARKETS.STARTED:
      return merge(state, {
        marketsLoading: true,
        marketsLoadingError: null
      })
    case FETCH_MARKETS.FAILED:
      return merge(state, {
        marketsLoading: false,
        marketsLoadingError: action.payload
      })
    case FETCH_MARKETS.SUCCEED:
      return merge(state, {
        marketsLoading: false,
        markets: action.payload
      })
    case ADD_MARKET_WATCHLIST.STARTED: {
      const { market, following } = action.payload[0]
      const markets = merge(state.markets, {})
      markets[market.id] = merge(market, { following })
      return merge(state, { markets })
    }
    case FETCH_FULL_MARKET.STARTED:
      return merge(state, {
        singleMarketLoading: true,
        singleMarketLoadingError: null
      })
    case FETCH_FULL_MARKET.SUCCEED: {
      const market = action.payload
      const markets = merge(state.markets, {})
      markets[market.id] = market
      return merge(state, {
        singleMarketLoading: false,
        markets
      })
    }
    case FETCH_FULL_MARKET.FAILED:
      return merge(state, {
        singleMarketLoading: false,
        singleMarketLoadingError: action.payload
      })
    case FETCH_MARKET_NEWS.SUCCEED: {
      const { marketId, ...news } = action.payload
      const market = state.markets[marketId]
      market.news = merge(news, {
        results: merge(market.news.results, news.results)
      })
      const markets = merge(state.markets, {})
      markets[marketId] = market
      return merge(state, { markets })
    }
    default:
      return state
  }
}

export default marketReducer
