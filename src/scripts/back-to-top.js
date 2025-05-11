export const backToTop = () => {
  const btn = document.querySelector('.j-back-to-top')

  const checkVisibility = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const windowHeight = document.documentElement.clientHeight

    if (btn) {
      if (scrollTop > windowHeight * 0.1) {
        btn.classList.add('is-view')
      } else {
        btn.classList.remove('is-view')
      }
    }
  }

  const scrollToTop = () => {
    if (btn) {
      btn.blur()
      window.scrollTo({
        top: 0,
      })
    }
  }

  let ticking = false
  const throttle = (callback) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback()
        ticking = false
      })
      ticking = true
    }
  }

  if (btn) {
    btn.addEventListener('click', scrollToTop)
  }

  window.addEventListener('scroll', () => throttle(checkVisibility))

  checkVisibility()
}
