import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_bg.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createAspectRatio = () => {
	const AspectRatio = document.createElement('ul')
	AspectRatio.className = 'o-cls'
	AspectRatio.innerHTML = `
		<li>
			<div class="o-frm u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">l : 16/9</code>
		</li>
		<li>
			<div class="o-frm u-asp-sq u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">sq : 1/1</code>
		</li>
		<li>
			<div class="o-frm u-asp-s u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">s : 3/2</code>
		</li>
		<li>
			<div class="o-frm u-asp-m u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">m : 4/3</code>
		</li>
		<li>
			<div class="o-frm u-asp-ys u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">ys : 2/3</code>
		</li>
		<li>
			<div class="o-frm u-asp-ym u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">ym : 3/4</code>
		</li>
		<li>
			<div class="o-frm u-asp-yl u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">yl : 9/16</code>
		</li>
		<li>
			<div class="o-frm u-asp-ppr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">ppr : √2/1</code>
		</li>
		<li>
			<div class="o-frm u-asp-yppr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">yppr : 1/√2</code>
		</li>
		<li>
			<div class="o-frm u-asp-brz u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">brz : (3+√13)/2/1</code>
		</li>
		<li>
			<div class="o-frm u-asp-ybrz u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">ybrz : 1/(3+√13)/2</code>
		</li>
		<li>
			<div class="o-frm u-asp-xbnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">xbnr : 8/1</code>
		</li>
		<li>
			<div class="o-frm u-asp-ybnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">ybnr : 1/2</code>
		</li>
		<li>
			<div class="o-frm u-asp-fbnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">fbnr : 39/5</code>
		</li>
		<li>
			<div class="o-frm u-asp-hbnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">hbnr : 39/10</code>
		</li>
		<li>
			<div class="o-frm u-asp-rbnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">rbnr : 6/5</code>
		</li>
		<li>
			<div class="o-frm u-asp-wsbnr u-bg-fll u-mb-s" style="min-width: 25svw;"></div>
			<code class="c-prg-l u-fnt-wb u-px-s u-py-xs" style="color:var(--c-txt-desc);background-color:var(--c-bg-behind);">wsbnr : 4/15</code>
		</li>
	`
	return AspectRatio
}
