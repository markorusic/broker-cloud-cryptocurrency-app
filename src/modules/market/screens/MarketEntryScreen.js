import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import { Loader, Section, Container } from 'src/shared/components/ui'
import lang from 'src/lang'
import { formatPrice } from '../utils'
import MarketNewsList from '../components/MarketNewsList/MarketNewsList'
import { fetchFullMarket, fetchMarketNews } from '../actions'
import { getMarketById } from '../selectors'
import MarketPriceChart from '../components/MarketPriceChart'

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
        <View style={styles.topContainer}>
          <Text style={styles.topContainerTitle}>
            {formatPrice(market.price.ask)}
          </Text>
          <MarketPriceChart data={market.charts} />
        </View>
        <Container>
          <Section title={lang('About')}>
            <Text style={styles.description}>
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

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainerTitle: {
    color: 'black',
    fontSize: 25
  },
  description: {
    fontSize: 16
  }
})

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
