export const shareUrl = () => {
  const url = document.querySelector('#share-url')
  const btn = document.querySelector('.c-btn--copy')
  const tip = document.querySelector('#tooltip-share-url')

  function selectAll(target) {
    target.select()
  }

  async function copyToClip(target) {
    try {
      await navigator.clipboard.writeText(target.value)
      if (tip) {
        tip.textContent = 'Copied!'
        tip.setAttribute('aria-label', 'Copied!')
        tip.setAttribute('aria-hidden', 'false')
      }
      if (btn) {
        btn.setAttribute('aria-label', 'URL copied to clipboard')
      }
    } catch {
      return
    } finally {
      setTimeout(() => {
        if (tip) {
          tip.textContent = 'Copy url to clipboard'
          tip.setAttribute('aria-label', 'Copy url to clipboard')
          tip.setAttribute('aria-hidden', 'true')
        }
        btn.disabled = false
        if (btn) {
          btn.setAttribute('aria-label', 'copy')
          btn.setAttribute('aria-disabled', 'false')
        }
      }, 1000)
    }
  }

  if (url) {
    url.addEventListener('click', () => {
      selectAll(url)
    })
    url.addEventListener('focus', () => {
      selectAll(url)
    })
  }

  if (btn != null) {
    btn.addEventListener('click', () => {
      btn.disabled = true
      btn.setAttribute('aria-disabled', 'true')
      copyToClip(url)
    })
  }
}
