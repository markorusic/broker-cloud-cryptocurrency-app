import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text } from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import { Loader, Section, Container } from 'src/shared/components/ui'
import MarketNewsList from '../components/MarketNewsList/MarketNewsList'
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

  state = {
    started: false
  }

  componentDidMount = () => {
    this.props.fetchMarket()
    this.setState({ started: true })
  }

  render() {
    const { loading, error, market, fetchNews } = this.props
    const { started } = this.state
    if (!started) {
      return null
    }
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
        <Container>
          <Section title="About">
            <Text style={{ fontSize: 16 }}>
              {market.instrument.description}
            </Text>
          </Section>
          <MarketNewsList
            news={market.news.results}
            loadMore={fetchNews}
            showLoadMore={market.news.count > market.news.results.length}
          />
        </Container>
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
