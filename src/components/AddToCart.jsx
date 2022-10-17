function AddToCart({ productDetails }) {
  return (
    <div className="sticky bottom-0 flex justify-between items-center border-primary border-t-[1px] p-3 mt-5 md:mt-10 bg-black shadow-top">
      <h2>$ {productDetails.steps}</h2>
      <button className="bg-primary w-36 p-2 rounded-full self-center">
        add to cart
      </button>
    </div>
  )
}

export default AddToCart
