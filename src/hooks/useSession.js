import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function useSession() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return session
}

export default useSession
