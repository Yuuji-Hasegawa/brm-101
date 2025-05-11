import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/utils/_spaces.scss'

export const createStack = ({
	gutter,
	label,
	count = 5,
}) => {
	const Stack = document.createElement('div')
	for (let i = 1; i <= count; i++) {
		const span = document.createElement('span')
		span.innerText = label
		span.style.borderStyle = 'solid'
		span.style.borderColor = 'var(--c-brd)'
		span.style.borderWidth = '1px'
		span.className = 'u-pd-s'
		Stack.append(span)
	}

	const param = gutter
    ? `o-stc u-ins-stc u-space-${gutter}`
    : 'o-stc'
  Stack.className = param

  return Stack
}
