import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/utils/_spaces.scss'

export const createBox = ({
	textColor,
	borderWidth,
	borderColor,
	outlineColor,
	bgColor,
  label,
}) => {
  const Box = document.createElement('div')
  Box.innerText = label
	Box.className = 'o-bx u-pd-m'

	if (textColor) Box.style.setProperty('--bx-txt-clr', textColor)
	if (borderWidth) Box.style.setProperty('--bx-brd-w', borderWidth)
	if (borderColor) Box.style.setProperty('--bx-brd-clr', borderColor)
	if (outlineColor) Box.style.setProperty('--bx-otl-clr', outlineColor)
	if (bgColor) Box.style.setProperty('--bx-bg-clr', bgColor)

	Box.style.minWidth = '100px'

  return Box
}
