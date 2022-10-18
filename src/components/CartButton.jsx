import { NavLink } from 'react-router-dom'
import { IconCart } from './IconCart'

export function CartButton() {
  return (
    <NavLink
      to={'/cart'}
      className="bg-primary fixed bottom-5 right-5 p-4 rounded-full"
    >
      <IconCart size={30} />
      <div className="bg-primary absolute -top-4 right-10 px-4 py-1 rounded-full shadow-cart">
        10
      </div>
    </NavLink>
  )
}
