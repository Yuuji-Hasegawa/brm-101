import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_btn.scss'
import '../../styles/utils/_elevate.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createElevation = () => {
	const Elevation = document.createElement('ul')
	Elevation.className = 'o-cls'
	Elevation.innerHTML = `
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">none</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-s" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">layer</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-m" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">elevate</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-l" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">float</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--elv u-mb-s" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">elevate->moved</p>
		</li>
	`
	return Elevation
}
