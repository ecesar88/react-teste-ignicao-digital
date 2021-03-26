// Format the price using a basic replace to insert a comma!
export const formatPrice = (price: number): string => {
  let priceString = String(price)
  return priceString.replace(/(^\d)(\d+)/, '$1,$2')
}

