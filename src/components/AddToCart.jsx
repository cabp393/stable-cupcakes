import { useDataContext } from '../hooks/useDataContext'
import { CartButton } from './CartButton'

function AddToCart({ productDetails }) {
  const { cart, addProductToCart } = useDataContext()

  const handleClick = () => {
    addProductToCart(productDetails)
  }

  const findProduct = cart.products.find(p => p.productId === productDetails.id)

  if (findProduct) return <CartButton />

  return (
    <div className="sticky bottom-0 flex justify-between items-center border-primary border-t-[1px] p-3 mt-5 md:mt-10 bg-black shadow-top">
      <h2>$ {productDetails.steps}</h2>
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
