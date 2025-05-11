import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/components/_btn.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createSpacing = () => {
	const Spacing = document.createElement('div')
	Spacing.innerHTML = `
		<h2 class="c-h2-ext u-fnt-wb u-mb-l">spaceScale none</h2>
		<ul class="o-cls u-ins-cls u-space-none">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space none</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space none</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space none</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space none</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space none</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale 3xs</h2>
		<ul class="o-cls u-ins-cls u-space-3xs">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xs</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale 2xs</h2>
		<ul class="o-cls u-ins-cls u-space-2xs">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xs</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale xs</h2>
		<ul class="o-cls u-ins-cls u-space-xs">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xs</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xs</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale s</h2>
		<ul class="o-cls u-ins-cls u-space-2">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space s</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space s</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space s</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space s</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space s</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale m</h2>
		<ul class="o-cls">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space m</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space m</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space m</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space m</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space m</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale l</h2>
		<ul class="o-cls u-ins-cls u-space-l">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space l</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space l</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space l</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space l</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space l</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale xl</h2>
		<ul class="o-cls u-ins-cls u-space-xl">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space xl</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale 2xl</h2>
		<ul class="o-cls u-ins-cls u-space-2xl">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 2xl</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale 3xl</h2>
		<ul class="o-cls u-ins-cls u-space-3xl">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 3xl</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale 4xl</h2>
		<ul class="o-cls u-ins-cls u-space-4xl">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 4xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 4xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 4xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 4xl</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space 4xl</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale auto</h2>
		<ul class="o-cls u-ins-cls u-space-auto">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space auto</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space auto</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space auto</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space auto</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space auto</li>
		</ul>
		<h2 class="c-h2 u-fnt-wb">spaceScale clamp</h2>
		<ul class="o-cls u-ins-cls u-space-clamp">
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space clamp</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space clamp</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space clamp</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space clamp</li>
			<li class="o-bx c-btn c-btn--sq c-btn--lne u-pd-s c-prg-l">space clamp</li>
		</ul>
	`
	return Spacing
}
