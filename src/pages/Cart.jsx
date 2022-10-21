import { Btn } from '../components/Btn'
import { CartProduct } from '../components/CartProduct'
import { useDataContext } from '../hooks/useDataContext'
import { calculateTotals } from '../utils/calculateTotals'

function Cart() {
  const { cart } = useDataContext()
  const { totalPrice } = calculateTotals(cart)

  return (
    <section>
      <h1 className="text-5xl text-center my-7 md:my-10 px-4">your cart</h1>

      {cart.map(p => (
        <CartProduct product={p} key={p.id} />
      ))}

      <div className="flex flex-col mx-4 my-8 rounded lg:mx-80">
        <div className="border-t-detail border-t-[1px] pb-4" />

        <div className="flex justify-between text-detail ">
          subtotal <span>$ {totalPrice}</span>
        </div>
        <div className="flex justify-between">
          total <span>$ {totalPrice}</span>
        </div>
        <Btn title={'checkout'} className="text-xl" />
      </div>
    </section>
  )
}

export default Cart
