export const uppercase = str => str && str.toUpperCase()
export const keyExtractor = ({ id }) => id
export const merge = (arg1, arg2) => ({
  ...arg1,
  ...arg2
})
export const delay = (ms = 0) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
