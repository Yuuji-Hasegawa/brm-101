import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_stack.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/utils/_spaces.scss'
import '../../../styles/utils/_text.scss'

export const createSemanticColor = () => {
	const SemanticColor = document.createElement('div')
	SemanticColor.className = 'o-stc'
	SemanticColor.innerHTML = `<h2 class="c-h2-ext u-mb-l">Container</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-bg);">
		--c-txt / --c-bg
	</span>
	<h2 class="c-h2">LayeredContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-desc);background-color:var(--c-bg-layer);">
		--c-txt-desc / --c-bg-layer
	</span>
	<h2 class="c-h2">PrimaryContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-bg-primary);background-color:var(--c-bg-primary);">
		--c-txt-on-bg-primary / --c-bg-primary
	</span>
	<h2 class="c-h2">PrimaryFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-fill);background-color:var(--c-fill);">
		--c-txt-on-fill / --c-fill
	</span>
	<h2 class="c-h2">PrimaryInverseFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-fill-primary-inverse);">
		--c-txt / --c-fill-primary-inverse
	</span>
	<h2 class="c-h2">SecondaryContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-bg-secondary);background-color:var(--c-bg-secondary);">
		--c-txt-on-bg-secondary / --c-bg-secondary
	</span>
	<h2 class="c-h2">SecondaryFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-fill-secondary);background-color:var(--c-fill-secondary);">
		--c-txt-on-fill-secondary / --c-fill-secondary
	</span>
	<h2 class="c-h2">TertiaryContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-bg-tertiary);background-color:var(--c-bg-tertiary);">
		--c-txt-on-bg-tertiary / --c-bg-tertiary
	</span>
	<h2 class="c-h2">TertiaryFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-fill-tertiary);background-color:var(--c-fill-tertiary);">
		--c-txt-on-fill-tertiary / --c-fill-tertiary
	</span>
	<h2 class="c-h2">NeutralFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-fill-neutral);">
		--c-txt / --c-fill-neutral
	</span>
	<h2 class="c-h2">InverseFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-inverse-bg);background-color:var(--c-fill-inverse-bg);">
		--c-txt-on-inverse-bg / --c-fill-inverse-bg
	</span>
	<h2 class="c-h2">ErrorContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-error-bg);background-color:var(--c-status-error-bg);">
		--c-txt-on-error-bg / --c-status-error-bg
	</span>
	<h2 class="c-h2">ErrorFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-error);background-color:var(--c-status-error);">
		--c-txt-on-error / --c-status-error
	</span>
	<h2 class="c-h2">SuccessContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-success-bg);background-color:var(--c-status-success-bg);">
		--c-txt-on-success-bg / --c-status-success-bg
	</span>
	<h2 class="c-h2">SuccessFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-success);background-color:var(--c-status-success);">
		--c-txt-on-success / --c-status-success
	</span>
	<h2 class="c-h2">WarningContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-warning-bg);background-color:var(--c-status-warning-bg);">
		--c-txt-on-warning-bg / --c-status-warning-bg
	</span>
	<h2 class="c-h2">WarningFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-warning);background-color:var(--c-status-warning);">
		--c-txt-on-warning / --c-status-warning
	</span>
	<h2 class="c-h2">InfoContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-info-bg);background-color:var(--c-status-info-bg);">
		--c-txt-on-info-bg / --c-status-info-bg
	</span>
	<h2 class="c-h2">InfoFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-on-info);background-color:var(--c-status-info);">
		--c-txt-on-info / --c-status-info
	</span>
	<h2 class="c-h2">DisabledFill</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt-disabled);background-color:var(--c-fill-disabled);">
		--c-txt-disabled / --c-fill-disabled
	</span>
	<h2 class="c-h2">TextPlaceholder</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-placeholder);background-color:var(--c-bg);">
		--c-placeholder / --c-bg
	</span>
	<h2 class="c-h2">ActiveContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-bg-active);">
		--c-txt / --c-bg-active
	</span>
	<h2 class="c-h2">BehindContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-bg-behind);">
		--c-txt / --c-bg-behind
	</span>
	<h2 class="c-h2">ModalContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-bg-modal);">
		--c-txt / --c-bg-modal
	</span>
	<h2 class="c-h2">EmphasisContainer</h2>
	<span class="c-prg-l u-pd-s u-txt-ctr" style="color:var(--c-txt);background-color:var(--c-bg-emphasis);">
		--c-txt / --c-bg-emphasis
	</span>
	`
	return SemanticColor
}
