import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_accessory.scss'
import '../../styles/utils/_spaces.scss'

export const createNote = () => {
	const count = 10
	const Note = document.createElement('ul')
	Note.className = 'o-stc u-ins-stc u-space-m'
	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.className = 'c-note c-prg-m'
		li.innerText = `${i}'s note`
		li.style.color = 'var(--c-txt-desc)'
		Note.appendChild(li)
	}
	return Note
}
