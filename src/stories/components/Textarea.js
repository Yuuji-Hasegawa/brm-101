import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_form.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'

export const createTextarea = ({
	modifier,
	label,
}) => {
	const Textarea = document.createElement('textarea')
	Textarea.classList.add(
		...['o-bx', 'c-prg-l','u-pd-s','c-frm-txt', ...(modifier ? modifier.split(' ') : [])]
	);
	Textarea.setAttribute('placeholder', `例) ${label}`)

	return Textarea
}
