export function Input({ title, handler, type }) {
  const name = title.replace(' ', '_')
  return (
    <>
      <label forhtml={name}>{title}</label>
      <input
        type={type}
        name={name}
        onChange={handler}
        required
        className="text-black px-4 py-2 rounded-full"
      />
    </>
  )
}
