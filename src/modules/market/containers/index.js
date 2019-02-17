import Snackbar from 'react-native-snackbar'
import lang from 'src/lang'
import { fetchMarkets, addMarketToWatchlist } from '../actions'
import { getMarkets } from '../selectors'

export const mapStateToProps = state => ({
  markets: getMarkets(state),
  refreshing: state.market.marketsLoading,
  marketsLoadingError: state.market.marketsLoadingError
})

export const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(fetchMarkets()),
  onFollow: payload => {
    const { following } = payload
    Snackbar.show({
      title: following
        ? lang('Successfully added to favorites')
        : lang('Successfully removed from favorites')
    })
    return dispatch(addMarketToWatchlist(payload))
  }
})
