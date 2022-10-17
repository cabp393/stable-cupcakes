import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import useSession from '../hooks/useSession'
import { supabase } from '../lib/supabase'

export function Navbar() {
  const session = useSession()
  const params = useLocation().pathname.slice(1)
  const navigate = useNavigate()

  async function logOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new error()
    } else {
      navigate('/')
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
