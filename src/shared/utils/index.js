export const uppercase = str => str && str.toUpperCase()
export const get = key => item => item[key]
export const keyExtractor = item => item.id.toString()
export const getData = get('data')
export const groupBy = (items, key) =>
  items.reduce((acc, current) => {
    acc[current[key]] = current
    return acc
  }, {})
export const isIn = ({ item, items, key = 'id' }) =>
  items.find(currentItem => currentItem[key] === item[key]) !== undefined
export const merge = (arg1, arg2) => ({
  ...arg1,
  ...arg2
})
export const delay = (ms = 0) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
