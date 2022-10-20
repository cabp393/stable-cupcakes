import { supabase } from '../lib/supabase'

async function logout() {
  return supabase.auth.signOut().then(({ error }) => error)
}

export default logout
