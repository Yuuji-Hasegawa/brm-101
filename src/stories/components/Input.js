import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_form.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'

export const createInput = ({
	modifier,
	label,
}) => {
	const Input = document.createElement('input')
	Input.classList.add(
		...['o-bx', 'c-prg-l','u-pd-s','c-frm-txt', ...(modifier ? modifier.split(' ') : [])]
	);
	Input.type = 'text'
	Input.setAttribute('placeholder', `例) ${label}`)

	return Input
}
