import { useState } from 'react'
import { useDataContext } from '../hooks/useDataContext'

export function CartProduct({ product }) {
  const { setCart } = useDataContext()
  const [inputQuantity, setInputQuantity] = useState(product.productQuantity)

  const handleQuantity = e => {
    const value = e.target.value
    setInputQuantity(value)

    setCart(prev => {
      let findProduct = null
      const filteredList = prev.products.filter(p => {
        if (p.productId === product.productId) findProduct = p
        return p.productId !== product.productId
      })

      const updateProduct = {
        ...findProduct,
        productQuantity: value,
      }

      const updateTotalPrice =
        updateProduct.productQuantity * updateProduct.productPrice -
        findProduct.productQuantity * findProduct.productPrice

      const updateTotalQuantity =
        updateProduct.productQuantity - findProduct.productQuantity

      return {
        ...prev,
        totalQuantity: prev.totalQuantity + updateTotalQuantity,
        totalPrice: prev.totalPrice + updateTotalPrice,
        products: [...filteredList, updateProduct],
      }
    })
  }

  const handleRemove = () => {
    setCart(prev => {
      let findProduct = null
      const removeProduct = prev.products.filter(p => {
        if (p.productId === product.productId) findProduct = p
        return p.productId !== product.productId
      })

      const updateTotalPrice =
        findProduct.productPrice * product.productQuantity

      return {
        ...prev,
        totalQuantity: prev.totalQuantity - findProduct.productQuantity,
        totalPrice: prev.totalPrice - updateTotalPrice,
        products: removeProduct,
      }
    })
  }

  return (
    <article className="grid grid-cols-[20%_1fr_20%] gap-5 p-4 lg:px-80">
      <img
        src={product.productImg}
        alt=""
        className="rounded-[10px] max-w-40 lg:max-h-40"
      />

      <div className="flex flex-col gap-2">
        <div>{product.productTitle}</div>
        <div className="text-content">$ {product.productPrice}</div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <input
          type="tel"
          min={1}
          value={inputQuantity}
          onChange={handleQuantity}
          className="rounded w-[50%] text-black text-center"
        />
        <div
          className="underline underline-offset-4 text-detail"
          onClick={handleRemove}
        >
          remove
        </div>
      </div>
    </article>
  )
}
