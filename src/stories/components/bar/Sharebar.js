import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_box.scss'
import '../../../styles/components/_btn.scss'
import '../../../styles/components/_form.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/components/_tip.scss'
import '../../../styles/utils/_spaces.scss'
import '../../../styles/utils/_text.scss'
import '../../../styles/utils/_display.scss'
import '../../../styles/utils/_flex.scss'
import '../../../styles/utils/_frames.scss'
import { shareUrl } from '../../../scripts/share-url.js';

export const createSharebar = () => {
	const Sharebar = document.createElement('div')
	Sharebar.className = 'u-dsp-flx u-pos-r'
	Sharebar.innerHTML = `<label for="share-url" class="sr-only">Copy Share URL</label>
        <input
          class="o-bx c-frm-txt c-prg-l u-pd-s u-w-max"
          id="share-url"
          type="text"
          value="https://bbns.jp/services/1314/"
          readonly=""
        />
        <button
          type="button"
          class="o-bx c-btn c-btn--sq c-btn--txt c-btn--copy u-brd-r-s u-ml-m u-flx-shn"
          aria-label="copy"
          aria-disabled="false"
          aria-describedby="tooltip-share-url"
        >
          <svg
            class="c-icn-cpy"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            class="c-icn-chk"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span
          id="tooltip-share-url"
          class="c-tip c-tip--cpy c-sml-l u-px-s u-py-2xs"
          aria-label="Copy url to clipboard"
          aria-hidden="true"
          popover="auto"
        >
					Copy url to clipboard
				</span>`
	shareUrl()
	return Sharebar
}
