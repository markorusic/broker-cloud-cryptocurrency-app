import { createAsyncAction } from 'src/shared/utils/redux'
import { getUser } from 'src/modules/auth/selectors'
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
  (marketId, dispatch, getState) => {
    const user = getUser(getState())
    return marketService.fetchMarket({ user, marketId })
  }
)

export const fetchMarketNews = createAsyncAction(
  'FETCH_MARKET_NEWS',
  (payload, dispatch, getState) => {
    const user = getUser(getState())
    return marketService.fetchMarketNews({ user, payload })
  }
)
