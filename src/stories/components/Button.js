import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_btn.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_spaces.scss'

export const createButton = ({
	className = '',
	label = '',
	disabled = false,
}) => {
	const Button = document.createElement('button')
	Button.type = 'button'
	Button.innerText = label
	Button.className = 'o-bx c-btn u-brd-r-s c-prg-l u-py-s u-px-m'
	if (className) {
		className.trim().split(/\s+/).forEach(cls => Button.classList.add(cls))
	}
	if (disabled) {
		Button.disabled = true
		Button.setAttribute('aria-disabled', 'true')
	}
	return Button
}
