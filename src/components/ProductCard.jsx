export function ProductCard({ productDetails }) {
  return (
    <div className=" content-center w-full">
      <div className="text-5xl text-center my-5 md:my-10">
        {productDetails.title}
      </div>
      <div className="md:grid md:grid-cols-2 md:mt-7 md:gap-x-3">
        <img
          src={productDetails.img_url}
          alt={productDetails.title}
          height={productDetails.img_height}
          width={productDetails.img_width}
          className="rounded-2xl my-5 mx-auto md:my-0 md:max-w-full"
        />
        <div className="flex flex-col gap-5 md:max-w-lg">
          <div className="flex flex-col gap-1">
            prompt
            <span className="text-detail">{productDetails.prompt}</span>
          </div>
          <div className="flex justify-between">
            steps
            <span className="text-detail">{productDetails.steps}</span>
          </div>

          <div className="flex justify-between">
            sampler
            <span className="text-detail"> {productDetails.sampler}</span>
          </div>

          <div className="flex justify-between">
            cfg scale
            <span className="text-detail"> {productDetails.cfg_scale}</span>
          </div>

          <div className="flex justify-between">
            seed
            <span className="text-detail"> {productDetails.seed}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
