import { Btn } from '../components/Btn'
import { CartProduct } from '../components/CartProduct'
import { useDataContext } from '../hooks/useDataContext'

function Cart() {
  const { cart } = useDataContext()

  return (
    <section>
      <div className="text-5xl text-center my-7 md:my-10 px-4">Your cart</div>

      {cart.products.map(productItem => (
        <CartProduct product={productItem} key={productItem.productId} />
      ))}

      <div className="flex flex-col mx-4 my-8 rounded lg:mx-80">
        <div className="border-t-detail border-t-[1px] pb-4" />

        <div className="flex justify-between text-detail ">
          subtotal <span>$ {cart.totalPrice}</span>
        </div>
        <div className="flex justify-between">
          total <span>$ {cart.totalPrice}</span>
        </div>
        <Btn title={'checkout'} className="text-xl" />
      </div>
    </section>
  )
}

export default Cart
