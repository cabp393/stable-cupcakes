export function CartProduct() {
  return (
    <article className="grid grid-cols-[20%_1fr_20%] gap-5 p-4 lg:px-80">
      <img
        src="https://mpevthymxortshpjnugv.supabase.co/storage/v1/object/public/products/0.2898953730039151.png"
        alt=""
        className="rounded-[10px] max-w-40 lg:max-h-40"
      />

      <div className="flex flex-col gap-2">
        <div>product name</div>
        <div className="text-content">$300</div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <input
          value={'10'}
          className="rounded w-[50%] text-black text-center"
        />
        <div className="underline underline-offset-4 text-detail">remove</div>
      </div>
    </article>
  )
}
