import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_box.scss'
import '../../../styles/objects/_sidebar.scss'
import '../../../styles/components/_list.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/components/_table.scss'
import '../../../styles/utils/_spaces.scss'

export const createMaptable = () => {
	const count = 10
	const Maptable = document.createElement('table')
	Maptable.className = 'c-map-tbl'
	const Caption = document.createElement('caption')
	Caption.className = 'c-prg-l u-mb-s'
	Caption.innerText = 'MapTable'
	Maptable.appendChild(Caption)
	const Tbody = document.createElement('tbody')
	for (let i = 1; i <= count; i++) {
		const row = document.createElement('tr')
		row.className = 'o-sdb u-ins-sdb u-space-none'
		const th = document.createElement('th')
		th.innerText = 'MapTable Key'
		th.className = 'o-bx c-prg-l u-px-m u-py-s c-map-tbl__key'
		th.scope = 'row'
		const column = document.createElement('td')
		column.className = 'o-bx c-prg-l u-px-m u-py-s c-map-tbl__val'
		column.innerText = 'MapTable Value'
		row.appendChild(th)
		row.appendChild(column)
		Tbody.appendChild(row)
	}
	Maptable.appendChild(Tbody)
	return Maptable
}
