import { connect } from 'react-redux'
import MarketList from '../components/MarketList/MarketList'
import {
  mapStateToProps as baseMapStateToProps,
  mapDispatchToProps
} from './index'
import { getFavorites } from '../selectors'

const mapStateToProps = state => ({
  ...baseMapStateToProps(state),
  markets: getFavorites(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketList)
