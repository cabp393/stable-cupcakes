import { useRef, useState } from 'react'
import { Btn } from '../components/Btn'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'

function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error('confirm password')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: confirmPasswordRef.current.value,
    })

    if (error) {
      toast.error(error.message.toLowerCase())
      setLoading(false)
    } else {
      toast.success('check your email')
      setLoading(false)
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

        <label forhtml="confirm-password">confirm password</label>
        <input
          type="password"
          name="confirm-password"
          ref={confirmPasswordRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <Btn
          title={loading ? 'loading...' : 'sign up'}
          onSubmit={handleSubmit}
        />
      </form>
    </section>
  )
}

export default SignUp
