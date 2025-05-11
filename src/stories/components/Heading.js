import '../../styles/generic/_resets.scss'
import '../../styles/components/_text-sizes.scss'

export const createHeading = ({
	className,
	label,
}) => {
	const Heading = document.createElement('div')
	Heading.innerText = `${label}'s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	if(className) Heading.className = className
	return Heading
}
