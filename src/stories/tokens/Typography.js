import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'

export const createTypography = () => {
	const typography = document.createElement('div')
	typography.className = 'o-stc'
	typography.innerHTML = `<span style="font-size:var(--f-6xl);">fontSize 6xl</span>
		<span style="font-size:var(--f-5xl);">fontSize 5xl</span>
		<span style="font-size:var(--f-4xl);">fontSize 4xl</span>
		<span style="font-size:var(--f-3xl);">fontSize 3xl</span>
		<span style="font-size:var(--f-2xl);">fontSize 2xl</span>
		<span style="font-size:var(--f-xl);">fontSize xl</span>
		<span style="font-size:var(--f-l);">fontSize l</span>
		<span style="font-size:var(--f-m);">fontSize m</span>
		<span style="font-size:var(--f-s);">fontSize s</span>
		<span style="font-size:var(--f-xs);">fontSize xs</span>
		<span style="font-size:var(--f-2xs);">fontSize 2xs</span>
		<span style="font-size:var(--f-3xs);">fontSize 3xs</span>
		<span style="font-size:var(--f-4xs);">fontSize 4xs</span>
		<span style="font-size:var(--f-5xs);">fontSize 5xs</span>
		<span style="font-size:var(--f-6xs);">fontSize 6xs</span>`
	return typography
}
