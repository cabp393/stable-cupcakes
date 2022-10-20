import { useState } from 'react'
import { IconDelete } from '../components/IconDelete'
import toast from 'react-hot-toast'
import uploadImage from '../services/uploadImage'
import getImageDimensions from '../utils/getImageDimensions'
import generateRandomPath from '../utils/generateRandomPath'

export function InputFile({ productImage, setProductImage }) {
  const [uploading, setUploading] = useState(false)

  const uploadProductImg = async e => {
    try {
      setUploading(true)

      if (!e.target.files || e.target.files.length === 0) {
        throw new error()
      }

      const file = e.target.files[0]
      const filePath = generateRandomPath(file)
      const img_url = await uploadImage(filePath, file)

      getImageDimensions(img_url, setProductImage)
      toast.success('image uploaded')
    } catch (error) {
      toast.error('error uploading image')
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  if (productImage)
    return (
      <div className="flex justify-center relative">
        <IconDelete
          size={30}
          onClick={() => setProductImage(null)}
          className="absolute right-[10px] lg:right-[180px] -top-5 hover:cursor-pointer"
        />
        <img
          src={productImage.img_url}
          height={productImage.img_height}
          width={productImage.img_width}
          alt="Product image"
          className="rounded-2xl object-contain max-h-64 self-center"
        />
      </div>
    )

  return (
    <input
      type="file"
      name="file"
      accept="image/*"
      onChange={uploadProductImg}
      disabled={uploading}
      className="max-w-[80vw] self-center file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-primary file:text-white hover:file:cursor-pointer"
    />
  )
}
