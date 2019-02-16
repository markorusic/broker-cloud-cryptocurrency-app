export const getMarkets = state => Object.values(state.market.markets)

export const getFavorites = state =>
  getMarkets(state).filter(market => market.following)

export const getMarketById = id => state =>
  getMarkets(state).find(market => market.id === id)
