import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDataContext } from '../hooks/useDataContext'

export function CartProduct({ product }) {
  const [inputQuantity, setInputQuantity] = useState(product.productQuantity)

  const { removeProductFromCart, updateProductQuantityFromCart } =
    useDataContext()

  const handleQuantity = e => {
    const value = e.target.value
    setInputQuantity(value)
    updateProductQuantityFromCart(product.productId, Number(value))
  }

  const handleRemove = () => {
    removeProductFromCart(product.productId)
  }

  return (
    <article className="grid grid-cols-[20%_1fr_20%] gap-5 p-4 lg:px-80">
      <NavLink to={`/products/${product.productSlug}`}>
        <img
          src={product.productImg}
          alt={product.productTitleTitle}
          className="rounded-[10px] max-w-40 lg:max-h-40"
        />
      </NavLink>

      <div className="flex flex-col gap-2">
        <NavLink to={`/products/${product.productSlug}`}>
          <div>{product.productTitle}</div>
        </NavLink>
        <div className="text-content">$ {product.productPrice}</div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <input
          type="number"
          min={1}
          value={inputQuantity}
          onChange={handleQuantity}
          className="rounded w-[50%] text-black text-center md:pl-3"
        />
        <div
          className="underline underline-offset-4 text-detail hover:cursor-pointer"
          onClick={handleRemove}
        >
          remove
        </div>
      </div>
    </article>
  )
}
