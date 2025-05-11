import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_btn.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_spaces.scss'
import { backToTop } from '../../scripts/back-to-top.js';

export const createGoTopButton = () => {
	const GoTopButton = document.createElement('button')
	GoTopButton.type = 'button'
	GoTopButton.className = 'c-btn c-btn--sq c-btn--fll c-btn--go-top is-view u-brd-r-r j-back-to-top'
	GoTopButton.setAttribute('aria-label', 'Back to top')
	GoTopButton.style.top = '0px'
	GoTopButton.innerHTML = `<span class="sr-only">ページトップへ戻る</span>`
	GoTopButton.style.maxWidth = '48px'
	GoTopButton.style.maxHeight = '48px'
	backToTop()
	return GoTopButton
}
