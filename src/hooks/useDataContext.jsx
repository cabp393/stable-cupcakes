import { createContext, useContext, useEffect, useState } from 'react'
import getProductList from '../services/getProductsList'

const INITIAL_CART = window.localStorage.getItem('cart')
  ? JSON.parse(window.localStorage.getItem('cart'))
  : []

export const DataContext = createContext()

export function DataContextProvider(props) {
  const [productsList, setProductsList] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [cart, setCart] = useState(INITIAL_CART)

  useEffect(() => {
    getProductList().then(setProductsList)
    setRefresh(false)
  }, [refresh])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = product => {
    const newProduct = {
      ...product,
      quantity: 1,
      price: Number(product.steps),
    }
    setCart(prev => [...prev, newProduct])
  }

  const removeCart = idToRemove => {
    setCart(prev => prev.filter(p => p.id !== idToRemove))
  }

  const updateCart = (idToUpdate, value) => {
    setCart(prev => {
      const productIndex = prev.findIndex(p => p.id === idToUpdate)
      const tempProductList = [...prev]
      tempProductList[productIndex].quantity = value
      return tempProductList
    })
  }

  const value = {
    productsList,
    setProductsList,
    setRefresh,
    cart,
    setCart,
    addCart,
    removeCart,
    updateCart,
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
