import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import useSession from '../hooks/useSession'
import logout from '../services/logout'
import toast from 'react-hot-toast'

export function Navbar() {
  const session = useSession()
  const params = useLocation().pathname.slice(1)
  const navigate = useNavigate()

  async function logOut() {
    const error = await logout()
    if (error) toast.error('something went wrong')
    else {
      navigate('/')
      toast.success('session closed successfully')
    }
  }

  return (
    <nav className="flex flex-cols justify-between p-3">
      <NavLink to="/">
        <div>home</div>
      </NavLink>
      <div className="text-detail">{params}</div>

      {session ? (
        <div onClick={logOut} className="hover:cursor-pointer">
          logout
        </div>
      ) : (
        <NavLink to="login">
          <div>login</div>
        </NavLink>
      )}
    </nav>
  )
}
