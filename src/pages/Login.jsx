import { useRef, useState } from 'react'
import { Btn } from '../components/Btn'
import { supabase } from '../lib/supabase'
import { useNavigate, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })

    if (error) {
      toast.error(error.message.toLowerCase())
      setLoading(false)
    } else {
      toast.success('login success')
      setLoading(false)
      navigate('/')
    }
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        <label forhtml="email">email</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <label forhtml="password">password</label>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <Btn title={loading ? 'loading...' : 'login'} onSubmit={handleSubmit} />

        <NavLink to={'/signup'} end className={'text-content text-center'}>
          don't have an account? sign up
        </NavLink>
      </form>
    </section>
  )
}

export default Login
