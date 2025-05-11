import '../../styles/generic/_resets.scss'
import '../../styles/objects/_center.scss'
import '../../styles/utils/_spaces.scss'

export const createCenter = ({
	size,
	label,
}) => {
  const Center = document.createElement('div')
  Center.innerText = label
	Center.className = 'o-ctr u-mw-cnt'

	Center.style.backgroundColor = 'var(--c-bg-secondary)'
	Center.style.color = 'var(--c-txt-desc)'

	if (size) {
		Center.classList.add('u-ins-ctr', `u-space-${size}`)
	}

  return Center
}
