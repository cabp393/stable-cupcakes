import { useDataContext } from '../hooks/useDataContext'
import { CartButton } from './CartButton'

function AddToCart({ productDetails: { steps, id, title, img_url } }) {
  const { cart, setCart } = useDataContext()

  const handleClick = () => {
    const product = {
      productId: id,
      productTitle: title,
      productImg: img_url,
      productPrice: Number(steps),
      productQuantity: 1,
    }

    setCart(prev => ({
      totalQuantity: prev.totalQuantity + product.productQuantity,
      totalPrice: prev.totalPrice + product.productPrice,
      products: [...prev.products, product],
    }))
  }

  const findProduct = cart.products.find(p => p.productId === id)

  if (findProduct) return <CartButton />

  return (
    <div className="sticky bottom-0 flex justify-between items-center border-primary border-t-[1px] p-3 mt-5 md:mt-10 bg-black shadow-top">
      <h2>$ {steps}</h2>
      <button
        className="bg-primary w-36 p-2 rounded-full self-center"
        onClick={handleClick}
      >
        add to cart
      </button>
    </div>
  )
}

export default AddToCart
