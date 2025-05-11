import '../../styles/generic/_resets.scss'
import '../../styles/components/_list.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_tip.scss'
import '../../styles/utils/_spaces.scss'


export const createTip = () => {
	const Tip = `
	<div class="c-prg-l" style="position:relative;min-width: 200px; min-height: 200px;">
	Lorem ipsum...
	<span
    class="c-tip c-sml-l u-px-s u-py-2xs"
    aria-label="Tip Inner"
    aria-hidden="true"
    popover="auto"
		style="display:block; top:1rem; left:1rem;background: var(--c-bg-emphasis);"
  >
		Tip Inner
	</span>
</div>
	`
	return Tip
}
