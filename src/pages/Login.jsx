import { Btn } from '../components/Btn'
import { supabase } from '../lib/supabase'

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  function handleEmail(e) {
    const email = e.target.value
    if (email) {
      setEmail(email)
    }
  }

  function handlePassword(e) {
    const password = e.target.value
    if (password) {
      setPassword(password)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="mt-28 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        <label forhtml="email">email</label>
        <input
          type="text"
          name="email"
          onChange={handleEmail}
          className="text-black px-4 py-2 rounded-full"
        />

        <label forhtml="password">password</label>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
          className="text-black px-4 py-2 rounded-full"
        />

        <Btn title="sign in" onSubmit={handleSubmit} />
      </form>
    </section>
  )
}

export default Login
