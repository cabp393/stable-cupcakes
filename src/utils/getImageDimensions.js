const getImageDimensions = (img_url, setState) => {
  try {
    const img = new Image()

    img.src = img_url
    img.onload = function () {
      setState({ img_url, img_width: this.width, img_height: this.height })
    }
    img = null
  } catch (error) {
    console.log(error)
  }
}
export default getImageDimensions
