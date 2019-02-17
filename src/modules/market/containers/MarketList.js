import React, { Component } from 'react'
import { connect } from 'react-redux'
import MarketList from '../components/MarketList/MarketList'
import { mapStateToProps, mapDispatchToProps } from './index'

class MarketListContainer extends Component {
  componentDidMount = () => {
    this.props.onRefresh()
  }
  render = () => <MarketList {...this.props} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketListContainer)
