import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import $Product from './pages/$Product'
import CreateProduct from './pages/CreateProduct'
import toastCfg from './utils/toastCfg'

function App() {
  return (
    <main className="m-auto px-3 relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="createproduct" element={<CreateProduct />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<$Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster toastOptions={toastCfg} />
    </main>
  )
}

export default App
