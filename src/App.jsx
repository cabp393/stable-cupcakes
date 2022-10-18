import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import $Product from './pages/$Product'
import toastCfg from './utils/toastCfg'

function App() {
  return (
    <main className="m-auto relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="createproduct" element={<CreateProduct />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<$Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Toaster toastOptions={toastCfg} />
    </main>
  )
}

export default App
