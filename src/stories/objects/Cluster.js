import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/utils/_spaces.scss'

export const createCluster = ({
	size,
	label,
	count = 5,
}) => {
  const Cluster = document.createElement('ul')
  Cluster.className = 'o-cls'

	if (size) {
		Cluster.classList.add('u-ins-cls', `u-space-${size}`)
	}

	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.innerText = `${label} `.repeat(i).trim()
		li.style.borderStyle = 'solid'
		li.style.borderWidth = '1px'
		li.style.borderColor = 'var(--c-brd)'
		li.className = 'u-pd-m'
		Cluster.append(li)
	}

  return Cluster
}
