const getImageDimensions = (img_url, setState) => {
  try {
    let img = new Image()
    img.src = img_url
    img.onload = function () {
      setState({ img_url, img_width: this.width, img_height: this.height })
    }
    img = null
  } catch (error) {
    console.error(error)
  }
}

export default getImageDimensions
