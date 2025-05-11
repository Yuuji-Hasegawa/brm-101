import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_btn.scss'
import '../../styles/utils/_elevate.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createElevate = () => {
	const Elevate = document.createElement('ul')
	Elevate.className = 'o-cls'
	Elevate.innerHTML = `
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-s" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">u-level-s</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-m" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">u-level-m</p>
		</li>
		<li>
			<div class="o-bx c-btn c-btn--txt u-mb-s u-level-l" style="width:200px;height:200px;"></div>
			<p class="c-prg-l u-fnt-wb">u-level-l</p>
		</li>`
	return Elevate
}
