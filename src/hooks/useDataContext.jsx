import { createContext, useContext, useEffect, useState } from 'react'
import getProductList from '../services/getProductsList'

const INITIAL_CART = {
  totalQuantity: 0,
  totalPrice: 0,
  products: [],
}

export const DataContext = createContext()

export function DataContextProvider(props) {
  const [productsList, setProductsList] = useState(null)
  const [cart, setCart] = useState(INITIAL_CART)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    getProductList().then(setProductsList)
    setRefresh(false)
  }, [refresh])

  useEffect(() => {
    updateTotalCart()
  }, [cart.products])

  const addProductToCart = ({ id, title, slug, img_url, steps }) => {
    const newProduct = {
      productId: id,
      productTitle: title,
      productSlug: slug,
      productImg: img_url,
      productPrice: Number(steps),
      productQuantity: 1,
    }

    setCart(prev => ({
      products: [...prev.products, newProduct],
    }))
  }

  const removeProductFromCart = idToRemove => {
    setCart(prev => {
      const updateProductList = prev.products.filter(
        p => p.productId !== idToRemove
      )

      return {
        ...prev,
        products: updateProductList,
      }
    })
  }

  const updateProductQuantityFromCart = (idToUpdate, value) => {
    setCart(prev => {
      const productIndex = prev.products.findIndex(
        p => p.productId === idToUpdate
      )

      const tempProductList = [...prev.products]
      tempProductList[productIndex].productQuantity = value
      return { ...prev, products: tempProductList }
    })
  }

  const updateTotalCart = () => {
    setCart(prev => {
      let totalPrice = 0
      let totalQuantity = 0

      prev.products.forEach(p => {
        totalQuantity += p.productQuantity
        totalPrice += p.productQuantity * p.productPrice
      })

      console.log(totalQuantity)
      return {
        ...prev,
        totalPrice,
        totalQuantity,
      }
    })
  }

  const value = {
    productsList,
    setProductsList,
    setRefresh,
    cart,
    setCart,
    addProductToCart,
    removeProductFromCart,
    updateProductQuantityFromCart,
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
