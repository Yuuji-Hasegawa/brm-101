import { backToTop } from './back-to-top'
backToTop()

import { ioLazy } from './io-lazy'
ioLazy()

import { menu } from './menu'
menu()

import { shareUrl } from './share-url'
shareUrl()

import { loadingAdjust } from './loading-adjust'
import { setIntSize } from './set-int-size'

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

const safeSetIntSize = () => {
  requestAnimationFrame(() => setIntSize())
}

window.addEventListener('load', () => {
  loadingAdjust()
  safeSetIntSize()
})

window.addEventListener(
  'resize',
  debounce(() => {
    loadingAdjust()
    safeSetIntSize()
  }, 100),
)

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      loadingAdjust()
      safeSetIntSize()
    }
  }
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
