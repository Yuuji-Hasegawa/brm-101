import '../../styles/generic/_resets.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'

export const createLede = () => {
	const Lede = document.createElement('div')
	Lede.classList = 'c-prg-l u-pd-m'
	Lede.style.backgroundColor = 'var(--c-bg-layer)'
	Lede.style.color = 'var(--c-txt-desc)'
	Lede.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	return Lede
}
