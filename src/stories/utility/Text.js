import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_text.scss'
import '../../styles/utils/_spaces.scss'

export const createText = () => {
	const Text = document.createElement('div')
	Text.className = 'o-stc'
	Text.innerHTML = `<h2 class="c-h2-ext u-mb-l u-fnt-wb">LineHeights</h2>
	<ul class="o-cls">
		<li class="u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">LineHeights Normal</li>
		<li class="u-lnh-n u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">lineHeights none  / using u-lnh-n</li>
		<li class="u-lnh-s u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">lineHeights small / using u-lnh-s</li>
		<li class="u-lnh-l u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">lineHeights Large / using u-lnh-l</li>
	</ul>
	<h2 class="c-h2 u-fnt-wb">TextAlign</h2>
	<ul class="o-cls">
		<li class="u-pd-s" style="width: 200px;background-color: var(--c-bg-layer); color: var(--c-txt-desc);">TextAlign left / using u-txt-l</li>
		<li class="u-txt-ctr u-pd-s" style="width: 200px;background-color: var(--c-bg-layer); color: var(--c-txt-desc);">TextAlign center / using u-txt-ctr</li>
		<li class="u-txt-r u-pd-s" style="width: 200px;background-color: var(--c-bg-layer); color: var(--c-txt-desc);">TextAlign right / using u-txt-r</li>
	</ul>
	<h2 class="c-h2 u-fnt-wb">FontWeight</h2>
	<ul class="o-cls">
		<li class="u-fnt-wt u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight thin    / using u-fnt-wt</li>
		<li class="u-fnt-wx u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight xlight  / using u-fnt-wx</li>
		<li class="u-fnt-wl u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight light   / using u-fnt-wl</li>
		<li class="u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight regular</li>
		<li class="u-fnt-wm u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight medium  / using u-fnt-wm</li>
		<li class="u-fnt-wb u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontWeight bold    / using u-fnt-wb</li>
	</ul>
	<h2 class="c-h2 u-fnt-wb">fontFamily</h2>
	<ul class="o-cls">
		<li class="u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontFamily ja</li>
		<li class="u-fnt-en u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">fontFamily en / using u-fnt-en</li>
	</ul>
	<h2 class="c-h2 u-fnt-wb">txtTrim (u-txt-trim--*)</h2>
	<p class="u-mb-m u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">
		<span class="u-txt-trim">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
	</p>
	<p class="u-mb-m u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">
		<span class="u-txt-trim u-txt-trim--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
	</p>
	<p class="u-mb-m u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">
		<span class="u-txt-trim u-txt-trim--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
	</p>
	<p class="u-pd-s" style="background-color: var(--c-bg-layer); color: var(--c-txt-desc);">
		<span class="u-txt-trim u-txt-trim--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
	</p>
	<h2 class="c-h2 u-fnt-wb">Others</h2>
	<ul class="o-cls">
		<li>
			<span class="u-txt-underline">using u-txt-underline</span>
		</li>
		<li class="u-txt-dim">using u-txt-dim</li>
		<li class="u-txt-err">using u-txt-err</li>
		<li class="u-txt-suc">using u-txt-suc</li>
		<li class="u-txt-war">using u-txt-war</li>
		<li class="u-txt-inf">using u-txt-inf</li>
	</ul>`
	return Text
}
