import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { Btn } from '../components/Btn'
import toast from 'react-hot-toast'

function CreateProduct() {
  const [uploading, setUploading] = useState(false)
  const [productUrl, setProductUrl] = useState(null)
  const [productImg, setProductImg] = useState(null)
  const titleRef = useRef()
  const slugRef = useRef()
  const promptRef = useRef()
  const stepsRef = useRef()
  const samplerRef = useRef()
  const cfg_scaleRef = useRef()
  const seedRef = useRef()

  useEffect(() => {
    if (productUrl) downloadImage(productUrl)
  }, [productUrl])

  const downloadImage = async path => {
    try {
      const { data, error } = await supabase.storage
        .from('products')
        .download(path)
      if (error) {
        toast.error(error)
      }
      const url = URL.createObjectURL(data)
      setProductImg(url)
    } catch (error) {
      toast.error('Error downloading image: ', error.message)
    }
  }

  const uploadProductImg = async event => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        toast.error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { data, error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file)

      setProductUrl(data.path)
      toast.success('Image uploaded')
      if (uploadError) {
        toast.error('Error uploading image: ', uploadError)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setUploading(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const product = {
      title: titleRef.current.value,
      slug: slugRef.current.value,
      prompt: promptRef.current.value,
      steps: stepsRef.current.value,
      sampler: samplerRef.current.value,
      cfg_scale: cfg_scaleRef.current.value,
      seed: seedRef.current.value,
      img_url: productUrl,
    }

    console.log(product)
  }

  return (
    <section className="mt-20 lg:max-w-2xl m-auto">
      <form className="flex flex-col gap-5 px-4" onSubmit={handleSubmit}>
        {productImg ? (
          <img src={productImg} className="max-w-[50%] max-h-screen" />
        ) : (
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={uploadProductImg}
            disabled={uploading}
            className="self-center file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white hover:file:cursor-pointer"
          />
        )}

        <label forhtml="title">title</label>
        <input
          type="text"
          name="title"
          ref={titleRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <label forhtml="slug">slug</label>
        <input
          type="text"
          name="slug"
          ref={slugRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <label forhtml="prompt">prompt</label>
        <textarea
          type="text"
          name="prompt"
          ref={promptRef}
          className="text-black px-5 py-4 rounded-full resize-none overflow-hidden"
        />

        <label forhtml="steps">steps</label>
        <input
          type="text"
          name="steps"
          ref={stepsRef}
          className="text-black px-4 py-2 rounded-full"
        />
        <label forhtml="sampler">sampler</label>
        <input
          type="text"
          name="sampler"
          ref={samplerRef}
          className="text-black px-4 py-2 rounded-full"
        />
        <label forhtml="cfg_scale">cfg scale</label>
        <input
          type="text"
          name="cfg_scale"
          ref={cfg_scaleRef}
          className="text-black px-4 py-2 rounded-full"
        />
        <label forhtml="seed">seed</label>
        <input
          type="text"
          name="seed"
          ref={seedRef}
          className="text-black px-4 py-2 rounded-full"
        />

        <Btn title="submit" />
      </form>
    </section>
  )
}

export default CreateProduct
