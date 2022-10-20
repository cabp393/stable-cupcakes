import { supabase } from '../lib/supabase'

async function logout() {
  const { error } = await supabase.auth.signOut()

  return error
}

export default logout
