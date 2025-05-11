import '../../styles/generic/_resets.scss'
import '../../styles/objects/_grid.scss'
import '../../styles/utils/_spaces.scss'

export const createGrid = ({
	size,
	label,
	className,
	count = 12,
}) => {
	const Grid = document.createElement('ul')

	Grid.classList.add(
		...['o-grd', ...(className ? className.split(' ') : [])]
	);

	if (size) {
		Grid.classList.add('u-ins-grd', `u-space-${size}`)
	}

	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.innerText = `${label} ${i}`
		li.style.borderStyle = 'solid'
		li.style.borderWidth = '1px'
		li.style.borderColor = 'var(--c-brd)'
		li.className = 'u-pd-m'
		Grid.append(li)
	}

  return Grid
}
