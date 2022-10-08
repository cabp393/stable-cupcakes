import { useState } from 'react'
import { Btn } from '../components/Btn'
import { Input } from '../components/Input'
import toast from 'react-hot-toast'
import emailSignUp from '../services/emailSignUp'

function SignUp() {
  const [loading, setLoading] = useState(false)
  const [signUpData, setSignUpData] = useState({})

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    setSignUpData({
      ...signUpData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    if (signUpData.password !== signUpData.confirm_password) {
      toast.error('confirm password')
      setLoading(false)
      return
    }

    try {
      const error = await emailSignUp(signUpData.email, signUpData.password)
      if (error) throw error
      toast.success('check your email')
    } catch (error) {
      toast.error(error.message.toLowerCase())
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        <Input title="email" handler={handleInput} type="email" />
        <Input title="password" handler={handleInput} type="password" />
        <Input title="confirm password" handler={handleInput} type="password" />

        <Btn title={loading ? 'loading...' : 'sign up'} />
      </form>
    </section>
  )
}

export default SignUp
