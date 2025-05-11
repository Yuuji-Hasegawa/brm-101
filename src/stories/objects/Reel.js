import '../../styles/generic/_resets.scss'
import '../../styles/objects/_reel.scss'
import '../../styles/utils/_spaces.scss'

export const createReel = ({
	size,
	label,
	count = 5,
}) => {
  const Reel = document.createElement('ol')
  Reel.className = 'o-rl'

	if (size) {
		Reel.classList.add('u-ins-rl', `u-space-${size}`)
	}

	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.innerText = `${label} `.repeat(i).trim()
		li.style.borderStyle = 'solid'
		li.style.borderWidth = '1px'
		li.style.borderColor = 'var(--c-brd)'
		li.className = 'u-pd-m'
		Reel.append(li)
	}

  return Reel
}
