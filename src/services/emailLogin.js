import { supabase } from '../lib/supabase'

async function emailLogin(user) {
  return supabase.auth.signInWithPassword(user).then(({ error }) => error)
}

export default emailLogin
