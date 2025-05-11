import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'
import '../../styles/utils/_bg.scss'

export const createBackground = () => {
	const Background = document.createElement('div')
	Background.className = 'o-stc u-ins-stc u-space-m'
	Background.innerHTML = `
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll">u-bg-fll</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-sec">u-bg-fll-sec</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-ter">u-bg-fll-ter</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-inv">u-bg-fll-inv</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-err">u-bg-fll-err</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-suc">u-bg-fll-suc</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-war">u-bg-fll-war</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-fll-inf">u-bg-fll-inf</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl">u-bg-tnl</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-sec">u-bg-tnl-sec</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-ter">u-bg-tnl-ter</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-gry">u-bg-tnl-gry</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-err">u-bg-tnl-err</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-suc">u-bg-tnl-suc</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-war">u-bg-tnl-war</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-tnl-inf">u-bg-tnl-inf</div>
	<div class="c-prg-l u-pd-s u-txt-ctr u-fnt-wb u-bg-neu">u-bg-neu</div>`
	return Background
}
