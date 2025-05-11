import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_btn.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_spaces.scss'

export const createHamburgerButton = ({
	ariaExpanded = false,
	onClick,
}) => {
	let current = ariaExpanded;

	const HamburgerButton = document.createElement('button')
	HamburgerButton.type = 'button'
	HamburgerButton.setAttribute('aria-label', '#')
	HamburgerButton.setAttribute('aria-controls', '#')
	HamburgerButton.setAttribute('aria-expanded', String(ariaExpanded))
	HamburgerButton.innerHTML = `<span class="c-hbg-bars"></span>`
	HamburgerButton.className = 'o-bx c-btn--txt c-btn--sq c-btn--hbg'

	HamburgerButton.addEventListener('click', (e) => {
    current = !current;
    HamburgerButton.setAttribute('aria-expanded', String(current));

    if (typeof onClick === 'function') {
      onClick(e);
    }
  });
	return HamburgerButton
}
