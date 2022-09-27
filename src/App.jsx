import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main className="m-auto px-3 relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
