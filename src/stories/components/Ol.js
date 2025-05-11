import '../../styles/generic/_resets.scss'
import '../../styles/components/_list.scss'
import '../../styles/components/_text-sizes.scss'

export const createOl = ({
	modifier,
	label,
	count = 10,
}) => {
	const Ol = document.createElement('ol')
	Ol.classList.add(
		...['c-ol', ...(modifier ? modifier.split(' ') : [])]
	);

	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.innerText = label
		li.className = 'c-prg-l'
		Ol.append(li)
	}
	return Ol
}
