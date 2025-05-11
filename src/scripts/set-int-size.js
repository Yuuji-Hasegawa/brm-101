export const setIntSize = () => {
  const elements = document.querySelectorAll('.j-cnt-auto, .c-toc')
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const width = `${rect.width}px`
    const height = `${rect.height}px`
    element.style.containIntrinsicSize = `${width} ${height}`
  })
}
