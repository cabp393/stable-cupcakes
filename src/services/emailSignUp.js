import { supabase } from '../lib/supabase'

async function signUp(email, password) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  return error
}

export default signUp
