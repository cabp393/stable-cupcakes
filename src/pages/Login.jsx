import { useState } from 'react'
import { Btn } from '../components/Btn'
import { Input } from '../components/Input'
import { useNavigate, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import emailLogin from '../services/emailLogin'

function Login() {
  const [loading, setLoading] = useState(false)
  const [loginData, setLoginData] = useState({})
  const navigate = useNavigate()

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const error = await emailLogin(loginData.email, loginData.password)
      if (error) throw error

      toast.success('login success')
      navigate('/')
    } catch {
      toast.error('email or password error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        <Input title="email" handler={handleInput} type="email" />
        <Input title="password" handler={handleInput} type="password" />

        <Btn title={loading ? 'loading...' : 'login'} onSubmit={handleSubmit} />

        <NavLink to={'/signup'} className="text-content text-center">
          don't have an account? sign up
        </NavLink>
      </form>
    </section>
  )
}

export default Login
