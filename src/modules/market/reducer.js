import { merge } from 'src/shared/utils'
import { getMarkets } from './selectors'
import {
  FETCH_MARKETS,
  ADD_MARKET_WATCHLIST,
  FETCH_FULL_MARKET
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
    case ADD_MARKET_WATCHLIST.STARTED:
      const payload = action.payload[0]
      const markets = merge(state.markets, {
        [payload.market.id]: merge(payload.market, {
          following: payload.following
        })
      })
      return merge(state, { markets })
    case FETCH_FULL_MARKET.STARTED:
      return merge(state, {
        singleMarketLoading: true,
        singleMarketLoadingError: null
      })
    case FETCH_FULL_MARKET.SUCCEED:
      return merge(state, {
        singleMarketLoading: false,
        markets: state.markets.map(market => {
          if (market.id === action.payload.id) {
            market = merge(market, action.payload)
          }
          return market
        })
      })
    case FETCH_FULL_MARKET.FAILED:
      return merge(state, {
        singleMarketLoading: false,
        singleMarketLoadingError: action.payload
      })
    default:
      return state
  }
}

export default marketReducer
