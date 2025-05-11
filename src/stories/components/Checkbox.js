import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/components/_form.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_display.scss'
import '../../styles/utils/_flex.scss'
import '../../styles/utils/_interaction.scss'

export const createCheckbox = () => {
	const count = 5
	const Root = document.createElement('span')
	Root.className = 'o-cls'

	for (let i = 1; i <= count; i++) {
		const item = document.createElement('label')
		item.className = 'c-prg-l u-cur-ptr u-dsp-ifx u-flx-y-ctr'
		item.htmlFor = `item${i}`
		const Checkbox = document.createElement('input')
		Checkbox.classList = 'o-bx c-frm-chk u-mr-s'
		Checkbox.type = 'checkbox'
		Checkbox.name = `item${i}`
		Checkbox.value = `item${i}`
		Checkbox.id = `item${i}`
		item.appendChild(Checkbox)
		item.append(`item${i}`)
		Root.appendChild(item)
	}

	return Root
}
