import React, { Component } from 'react'
import { connect } from 'react-redux'
import MarketList from '../components/MarketList/MarketList'
import { fetchMarkets, addMarketToWatchlist } from '../actions'
import { getMarkets } from '../selectors'

class MarketListContainer extends Component {
  componentDidMount = () => {
    this.props.onRefresh()
  }

  render = () => <MarketList {...this.props} />
}

const mapStateToProps = state => ({
  markets: getMarkets(state),
  refreshing: state.market.marketsLoading,
  marketsLoadingError: state.market.marketsLoadingError
})

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(fetchMarkets()),
  onFollow: payload => dispatch(addMarketToWatchlist(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketListContainer)
