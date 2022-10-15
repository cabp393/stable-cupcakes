import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export const DataContext = createContext()

export function DataContextProvider(props) {
  const [productsList, setProductsList] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const value = { productsList, setProductsList, setRefresh }

  useEffect(() => {
    getProducts()
    setRefresh(false)
  }, [refresh])

  const getProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('product')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error

      setProductsList(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  )
}

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider')
  }
  return context
}
