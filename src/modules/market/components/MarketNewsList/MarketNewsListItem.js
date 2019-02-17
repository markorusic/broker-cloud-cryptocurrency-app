import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import { GRAY, LIGHT_GRAY, DARK_GRAY } from 'src/config/colors'

const formatDate = date => dayjs(date).format('D. MMM YYYY.')

const NewListItem = ({ newsEntry, index }) => (
  <View style={styles.container(index)}>
    <Text style={styles.title}>{newsEntry.title}</Text>
    <Text style={styles.date}>{formatDate(newsEntry.published)}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: index => ({
    paddingTop: index === 0 ? 0 : 15,
    paddingBottom: 5,
    borderBottomColor: LIGHT_GRAY,
    borderBottomWidth: 0.7
  }),
  title: {
    fontSize: 17,
    color: DARK_GRAY
  },
  date: {
    fontSize: 13,
    color: GRAY
  }
})
export default NewListItem
