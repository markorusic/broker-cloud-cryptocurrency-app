import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text } from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import { Loader } from 'src/shared/components/ui'
import { fetchFullMarket, fetchMarketNews } from '../actions'
import { getMarketById } from '../selectors'

const getMarketFromNav = nav => nav.state.params.market

class MarketEntryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: getMarketFromNav(navigation).name,
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.dispatch(NavigationActions.back())
        }}
      />
    )
  })

  componentDidMount = () => {
    this.props.fetchMarket()
  }

  render() {
    const { loading, error, market } = this.props
    if (loading) {
      return <Loader />
    }
    if (error) {
      return (
        <Text style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</Text>
      )
    }
    return (
      <ScrollView>
        <Text>{JSON.stringify(market, null, 2)}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, { navigation }) => ({
  market: getMarketById(getMarketFromNav(navigation).id)(state),
  loading: state.market.singleMarketLoading,
  error: state.market.singleMarketLoadingError
})
const mapDispatchToProps = (dispatch, { navigation }) => ({
  fetchMarket: () => dispatch(fetchFullMarket(getMarketFromNav(navigation))),
  fetchNews: () => dispatch(fetchMarketNews(getMarketFromNav(navigation)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketEntryScreen)
