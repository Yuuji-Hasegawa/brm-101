import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_box.scss'
import '../../../styles/objects/_sidebar.scss'
import '../../../styles/components/_list.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/components/_table.scss'
import '../../../styles/utils/_spaces.scss'

export const createReeltable = () => {
	const count = 10
	const Reeltable = document.createElement('table')
	Reeltable.className = 'c-rl-tbl'
	const Caption = document.createElement('caption')
	Caption.className = 'sr-only'
	Reeltable.appendChild(Caption)
	const Tbody = document.createElement('tbody')
	for (let i = 1; i <= count; i++) {
		const row = document.createElement('tr')
		const th = document.createElement('th')
		th.innerText = 'ReelTable th'
		th.className = 'o-bx c-prg-l u-px-m u-py-s'
		th.scope = 'row'
		row.appendChild(th)
		for (let j = 1; j <= count; j++) {
			const column = document.createElement('td')
			column.className = 'o-bx c-prg-l u-px-m u-py-s'
			column.innerText = 'ReelTable td'
			row.appendChild(column)
		}
		Tbody.appendChild(row)
	}
	Reeltable.appendChild(Tbody)
	return Reeltable
}
