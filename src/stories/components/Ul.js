import '../../styles/generic/_resets.scss'
import '../../styles/components/_list.scss'
import '../../styles/components/_text-sizes.scss'

export const createUl = () => {
	const count = 10
	const Ul = document.createElement('ul')
	Ul.className = 'c-ul'
	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.innerText = 'list Item'
		li.className = 'c-prg-l'
		Ul.append(li)
	}
	return Ul
}
