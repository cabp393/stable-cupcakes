import { NavLink, useLocation } from 'react-router-dom'

export function Navbar() {
  const params = useLocation().pathname.slice(1)

  return (
    <nav className="flex flex-cols justify-between sticky top-0 py-3">
      <NavLink to="/">
        <div>home</div>
      </NavLink>

      <div className="text-detail">{params}</div>

      <NavLink to="login">
        <div>login</div>
      </NavLink>
    </nav>
  )
}
