const generateRandomPath = file => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  return `${fileName}`
}
export default generateRandomPath
