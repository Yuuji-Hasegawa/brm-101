import '../../styles/generic/_resets.scss'
import '../../styles/objects/_switcher.scss'
import '../../styles/utils/_spaces.scss'

export const createSwitcher = ({
	size,
	label,
	count = 3,
}) => {
  const Switcher = document.createElement('div')
  Switcher.className = 'o-swt'

	if (size) {
		Switcher.classList.add('u-ins-swt', `u-space-${size}`)
	}

	for (let i = 1; i <= count; i++) {
		const span = document.createElement('span')
		span.innerText = label
		span.style.borderStyle = 'solid'
		span.style.borderWidth = '1px'
		span.style.borderColor = 'var(--c-brd)'
		span.className = 'u-pd-m'
		Switcher.append(span)
	}

  return Switcher
}
