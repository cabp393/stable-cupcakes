import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main className="m-auto px-3 relative">
      <Navbar />
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
