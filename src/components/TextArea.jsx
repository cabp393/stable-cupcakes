export function TextArea({ title, handler }) {
  const name = title.replace(' ', '_')
  return (
    <>
      <label forhtml={name}>{title}</label>
      <textarea
        type="text"
        name={name}
        onChange={handler}
        required
        className="text-black px-5 py-4 rounded-lg resize-none overflow-hidden"
      />
    </>
  )
}
