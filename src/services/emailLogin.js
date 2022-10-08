import { supabase } from '../lib/supabase'

async function emailLogin(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return error
}

export default emailLogin
