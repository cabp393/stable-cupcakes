import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import STORE_URL from '../utils/storeUrl'

function Products() {
  const [productsList, setProductList] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const { data, error } = await supabase.from('product').select('*')
      if (error) {
        throw error
      }

      setProductList(data)
    } catch (error) {
      console.error(error)
    }
  }

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('products')
        .download(path)
      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)
      return url
    } catch (error) {
      toast.error('error downloading image: ', error.message)
    }
  }

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5">
      {productsList?.map(product => {
        return (
          <NavLink to={product.slug} key={product.id}>
            <img
              src={`${STORE_URL}${product.img_url}`}
              alt={product.title}
              className="rounded"
            />
            <h2>{product.title}</h2>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Products
