import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function useProductDetails(slug) {
  const [productDetails, setProductDetails] = useState([])

  useEffect(() => {
    getProductDetails(slug)
  }, [])

  const getProductDetails = async slug => {
    try {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .eq('slug', slug)

      if (error) {
        throw error
      }

      setProductDetails(data[0])
    } catch (error) {
      console.error(error)
    }
  }
  return productDetails
}

export default useProductDetails
