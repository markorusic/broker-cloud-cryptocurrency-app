export const uppercase = str => str && str.toUpperCase()
export const keyExtractor = ({ id }) => id
export const merge = (arg1, arg2) => ({
  ...arg1,
  ...arg2
})
