import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function useProductsList() {
  const [productsList, setProductList] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
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
  return productsList
}

export default useProductsList
