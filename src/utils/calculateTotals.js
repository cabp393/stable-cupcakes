export const calculateTotals = products => {
  let totalPrice = 0
  let totalQuantity = 0

  products.forEach(p => {
    totalQuantity += p.quantity
    totalPrice += p.quantity * p.price
  })

  return { totalPrice, totalQuantity }
}
