import '../../styles/generic/_resets.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_frames.scss'

export const createFrame = ({
	size,
	label,
	round,
}) => {
	const Frame = document.createElement('div')
	Frame.className = 'o-frm'
	Frame.style.maxWidth = '500px'
	Frame.borderStyle = 'solid'
	Frame.borderWidth = '1px'
	Frame.borderColor = 'var(--c-brd)'

	if (size) {
		Frame.classList.add(`u-asp-${size}`)
	}

	if (round) {
		Frame.classList.add(`u-frm-r-${round}`)
	}

	const inner = document.createElement('span')
	inner.style.backgroundColor = 'var(--c-bg-primary)'
	inner.style.color = 'var(--c-txt-on-primary)'
	inner.innerText = label;
	inner.className = 'u-pd-m'

	Frame.append(inner)

  return Frame
}
