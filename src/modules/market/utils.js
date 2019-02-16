export const formatPrice = (number = 0) => {
  let [integerPart, fractionalPart = ''] = number.toString().split('.')
  while (fractionalPart.length < 2) {
    fractionalPart += '0'
  }
  return `$${integerPart
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${fractionalPart}`
}
