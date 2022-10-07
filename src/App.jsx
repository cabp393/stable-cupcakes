import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { supabase } from './lib/supabase'
import Home from './pages/home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import $Product from './pages/$Product'
import CreateProduct from './pages/CreateProduct'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <main className="m-auto px-3 relative">
      <Navbar session={session} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route
          path="createproduct"
          element={<CreateProduct session={session} />}
        />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<$Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </main>
  )
}

export default App
