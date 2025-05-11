import '../../styles/generic/_resets.scss'
import '../../styles/objects/_grid.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_bg.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createRadius = () => {
	const Radius = document.createElement('ul')
	Radius.className = 'o-grd o-grd--q'
	Radius.innerHTML = `
		<li>
			<div class="u-bg-fll u-brd-r-s u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key s</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-m u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key m</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-l u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key l</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-r u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key r</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-ts u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key ts</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-tm u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key tm</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-tl u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key tl</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-tr u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key tr</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-bs u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key bs</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-bm u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key bm</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-bl u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key bl</p>
		</li>
		<li>
			<div class="u-bg-fll u-brd-r-br u-mb-s u-mx-auto" style="width:100px;height:100px;"></div>
			<p class="c-prg-l u-fnt-wb u-txt-ctr">key br</p>
		</li>
	`
	return Radius
}
