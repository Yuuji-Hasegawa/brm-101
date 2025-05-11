import '../../styles/generic/_resets.scss'
import '../../styles/objects/_sidebar.scss'
import '../../styles/utils/_spaces.scss'

export const createSidebar = ({
	size,
	label,
}) => {
  const Sidebar = document.createElement('div')
	Sidebar.className = 'o-sdb u-pd-m'
	Sidebar.style.background = 'var(--c-bg)'

	if (size) {
		Sidebar.classList.add('u-ins-sdb', `u-space-${size}`)
	}

	const wide = document.createElement('div')
	wide.innerText = `${label} Wide Content`
	wide.style.flexBasis = 0
	wide.style.flexGrow = 999
	wide.style.minWidth = '50%'
	wide.className = 'u-pd-s'
	wide.style.backgroundColor = 'var(--c-fill-neutral)'

	const narrow = document.createElement('div')
	narrow.innerText = `${label} Narrow Content`
	narrow.style.flexBasis = '20rem'
	narrow.style.flexGrow = 1
	narrow.className = 'u-pd-s'
	narrow.style.backgroundColor = 'var(--c-bg-layer)'
	narrow.style.color = 'var(--c-txt-desc)'

	Sidebar.append(wide,narrow)

  return Sidebar
}
