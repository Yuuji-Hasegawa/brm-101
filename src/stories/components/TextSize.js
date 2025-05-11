import '../../styles/generic/_resets.scss'
import '../../styles/components/_text-sizes.scss'

export const createTextSize = ({
	className,
	label,
}) => {
	const TextSize = document.createElement('p')
	TextSize.innerText = `${label}'s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
	if(className) TextSize.className = className
	return TextSize
}
