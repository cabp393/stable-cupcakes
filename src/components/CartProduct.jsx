import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDataContext } from '../hooks/useDataContext'

export function CartProduct({ product }) {
  const [inputQuantity, setInputQuantity] = useState(product.quantity)
  const { removeCart, updateCart } = useDataContext()

  const handleQuantity = e => {
    const value = e.target.value
    setInputQuantity(value)
    updateCart(product.id, Number(value))
  }

  const handleRemove = () => {
    removeCart(product.id)
  }

  return (
    <article className="grid grid-cols-[20%_1fr_20%] gap-5 p-4 lg:px-80">
      <NavLink to={`/products/${product.slug}`}>
        <img
          src={product.img_url}
          alt={product.title}
          className="rounded-[10px] max-w-40 lg:max-h-40"
        />
      </NavLink>

      <div className="flex flex-col gap-2">
        <h2>{product.title}</h2>
        <div className="text-content">$ {product.price}</div>
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
