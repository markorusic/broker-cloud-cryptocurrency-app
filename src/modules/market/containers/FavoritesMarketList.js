import { connect } from 'react-redux'
import MarketList from '../components/MarketList/MarketList'
import { fetchMarkets, addMarketToWatchlist } from '../actions'
import { getFavorites } from '../selectors'

const mapStateToProps = state => ({
  markets: getFavorites(state),
  refreshing: state.market.marketsLoading,
  marketsLoadingError: state.market.marketsLoadingError
})

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(fetchMarkets()),
  onFollow: (...args) => dispatch(addMarketToWatchlist(...args))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketList)
