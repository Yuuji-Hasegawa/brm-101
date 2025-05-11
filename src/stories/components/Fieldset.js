import '../../styles/generic/_resets.scss'
import '../../styles/objects/_box.scss'
import '../../styles/components/_form.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_display.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_flex.scss'
import '../../styles/utils/_frames.scss'

export const createFieldset = () => {
	const Fieldset = document.createElement('form')
	Fieldset.action = '#'
	const FormInner = document.createElement('fieldset')
	FormInner.className = 'c-frm-grp u-pos-r u-mb-l'
	FormInner.innerHTML = `<legend
            class="c-frm-ttl c-prg-l u-pos-r u-flx-y-ctr u-dsp-ifx u-mb-s"
            data-placeholder="例）お名前"
          >
            お名前
          </legend>
          <input
            class="o-bx c-frm-txt c-prg-l u-pd-s u-w-max"
            id="name"
            name="your-name"
            type="text"
            aria-required="true"
            aria-describedby="name-helper name-error"
            autocapitalize="none"
            autocomplete="name"
            autocorrect="off"
            autofocus=""
            aria-invalid="false"
            placeholder="例）お名前"
          />
          <span id="name-helper" class="sr-only">
						お名前を入力してください。
					</span>
          <span
            class="c-frm-tip c-sml-l u-brd-r-s"
            id="name-error"
            aria-live="polite"
          >
						必須項目です。
					</span>`
	const formAfter = document.createElement('div')
	formAfter.className = 'o-bx c-frm-msg c-prg-l u-brd-r-s'
	formAfter.id = 'formMessage'
	formAfter.setAttribute('aria-hidden', 'true')
	formAfter.innerText = 'aaa'
	Fieldset.appendChild(FormInner)
	Fieldset.appendChild(formAfter)
	return Fieldset
}
