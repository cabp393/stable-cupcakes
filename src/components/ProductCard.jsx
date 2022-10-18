import AddToCart from './AddToCart'

export function ProductCard({ productDetails }) {
  return (
    <div className=" content-center w-full">
      <div className="text-5xl text-center my-7 md:my-10 px-4">
        {productDetails.title}
      </div>
      <div className="md:grid md:grid-cols-2 md:mt-7 md:gap-x-3">
        <div className="mx-4">
          <img
            src={productDetails.img_url}
            alt={productDetails.title}
            height={productDetails.img_height}
            width={productDetails.img_width}
            className="rounded-2xl my-5 mx-auto md:my-0 md:max-w-full"
          />
        </div>
        <div className="flex flex-col gap-5 md:max-w-lg">
          <div className="flex flex-col gap-1 px-4">
            prompt
            <span className="text-content">{productDetails.prompt}</span>
          </div>
          <div className="flex justify-between px-4">
            steps
            <span className="text-content">{productDetails.steps}</span>
          </div>

          <div className="flex justify-between px-4">
            sampler
            <span className="text-content"> {productDetails.sampler}</span>
          </div>

          <div className="flex justify-between px-4">
            cfg scale
            <span className="text-content"> {productDetails.cfg_scale}</span>
          </div>

          <div className="flex justify-between px-4">
            seed
            <span className="text-content"> {productDetails.seed}</span>
          </div>
          <AddToCart productDetails={productDetails} />
        </div>
      </div>
    </div>
  )
}
