export const menu = () => {
  const buttons = document.querySelectorAll('.c-btn--hbg')
  const menu = document.querySelector('.j-menu')
	const menuBg = document.querySelector('.c-menu-bg')

  const initNav = () => {
    buttons.forEach((button) => {
      button.setAttribute('aria-expanded', 'false')
      button.blur()
    })
    if (menu) {
      menu.classList.remove('is-open')
      menu.close()
    }
  }

  const handleNav = () => {
    if (menu) {
      if (!menu.classList.contains('is-open')) {
        buttons.forEach((button) => {
          button.setAttribute('aria-expanded', 'true')
          button.blur()
        })
        menu.classList.add('is-open')
        menu.show()
      } else {
        initNav()
      }
    }
  }

  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => handleNav())
    })
  }

  if (menuBg) {
    menuBg.addEventListener('click', initNav)
  }

  let ticking = false
  const handleResize = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        initNav()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('load', initNav)
  window.addEventListener('resize', handleResize)
}
