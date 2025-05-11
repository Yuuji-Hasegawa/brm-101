export const loadingAdjust = () => {
  const pictures = document.querySelectorAll('picture')
  const cntAutos = document.querySelectorAll('.j-cnt-auto')
  const windowHeight = window.innerHeight

  const isInViewport = (elem) => {
    const rect = elem.getBoundingClientRect()
    return rect.top < windowHeight
  }

  pictures.forEach((picture) => {
    if (isInViewport(picture)) {
      const img = picture.querySelector('img')
      if (img) {
        img.removeAttribute('loading')
        img.removeAttribute('decoding')
        img.setAttribute('fetchpriority', 'high')
      }
    }
  })

  cntAutos.forEach((elem) => {
    if (isInViewport(elem)) {
      elem.classList.remove('j-cnt-auto')
    }
  })
}
