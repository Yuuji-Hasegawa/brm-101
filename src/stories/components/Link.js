import '../../styles/generic/_resets.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_link.scss'

export const createLink = ({
	modifier,
	label,
}) => {
	const Link = document.createElement('a')
	Link.innerText = `${label}`
	Link.classList.add(
		...['c-prg-l', 'c-a', ...(modifier ? modifier.split(' ') : [])]
	);
	return Link
}
