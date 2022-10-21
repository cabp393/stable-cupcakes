import { NavLink } from 'react-router-dom'
import { useDataContext } from '../hooks/useDataContext'
import { calculateTotals } from '../utils/calculateTotals'
import { IconCart } from './IconCart'

export function CartButton() {
  const { cart } = useDataContext()
  const { totalQuantity } = calculateTotals(cart)

  if (totalQuantity === 0) return

  return (
    <NavLink
      to={'/cart'}
      className="bg-primary fixed bottom-5 right-5 p-4 rounded-full"
    >
      <IconCart size={30} />
      <div className="bg-primary absolute -top-4 right-10 px-4 py-1 rounded-full shadow-cart">
        {totalQuantity}
      </div>
    </NavLink>
  )
}
