import { supabase } from '../lib/supabase'

async function signUp(email, password) {
  const user = { email, password }
  return supabase.auth.signUp(user).then(({ error }) => error)
}

export default signUp
