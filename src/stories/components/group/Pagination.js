import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_box.scss'
import '../../../styles/objects/_icon.scss'
import '../../../styles/objects/_cluster.scss'
import '../../../styles/components/_btn.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/utils/_spaces.scss'
import '../../../styles/utils/_text.scss'
import '../../../styles/utils/_display.scss'
import '../../../styles/utils/_flex.scss'
import '../../../styles/utils/_frames.scss'

export const createPagination = () => {
	const Pagination = document.createElement('nav')
	Pagination.setAttribute('aria-label', 'Pagination')
	const Inner = document.createElement('ol')
	Inner.className = 'o-cls u-ins-cls u-space-s u-flx-ctr'
	Inner.innerHTML = `<li>
            <a
              href="#"
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec u-brd-r-s c-h4-ext"
              title="前のページ"
              aria-label="前のページへ"
            >
              <svg
                class="o-icn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">前のページへ</span>
            </a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="1ページ"
              aria-label="1ページ目へ"
            >
							1
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="2ページ"
              aria-label="2ページ目へ"
            >
							2
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="3ページ"
              aria-label="3ページ目へ"
            >
							3
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="4ページ"
              aria-label="4ページ目へ"
            >
							4
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="5ページ"
              aria-label="5ページ目へ"
            >
							5
						</a>
          </li>
          <li>
            <span
              class="o-bx c-btn c-btn--sq c-btn--lne c-prg-l u-brd-r-s u-fnt-en"
              aria-label="現在のページ"
              aria-current="page"
            >
              6
            </span>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="7ページ"
              aria-label="7ページ目へ"
            >
							7
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="8ページ"
              aria-label="8ページ目へ"
            >
							8
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="9ページ"
              aria-label="9ページ目へ"
            >
							9
						</a>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="10ページ"
              aria-label="10ページ目へ"
            >
							10
						</a>
          </li>
          <li>
            <span class="u-dsp-flx u-flx-y-ctr u-h-max c-prg-l u-fnt-en u-lnh-n">
							...
						</span>
          </li>
          <li>
            <a
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"
              href="#"
              title="1ページ"
              aria-label="15ページ目へ"
            >
              15
            </a>
          </li>
          <li>
            <a
              href="#"
              class="o-bx c-btn c-btn--sq c-btn--tnl-sec u-brd-r-s c-h4-ext"
              title="次のページ"
              aria-label="次のページへ"
            >
              <svg
                class="o-icn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">次のページへ</span>
            </a>
          </li>`
	Pagination.appendChild(Inner)
	return Pagination
}
