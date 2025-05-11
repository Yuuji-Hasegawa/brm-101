import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_stack.scss'
import '../../../styles/objects/_sidebar.scss'
import '../../../styles/objects/_frame.scss'
import '../../../styles/objects/_icon.scss'
import '../../../styles/objects/_cluster.scss'
import '../../../styles/components/_holder.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/components/_accessory.scss'
import '../../../styles/components/_link.scss'
import '../../../styles/utils/_spaces.scss'
import '../../../styles/utils/_flex.scss'
import '../../../styles/utils/_js.scss'
import '../../../styles/utils/_text.scss'
import '../../../styles/utils/_display.scss'
import '../../../styles/utils/_frames.scss'
import { loadingAdjust } from '../../../scripts/loading-adjust.js';
import { setIntSize } from '../../../scripts/set-int-size.js';

export const createBio = () => {
	const Bio = document.createElement('div')
	Bio.className = 'o-sdb c-hld-bio'
	Bio.innerHTML = `<div class="c-avatar u-mx-auto">
          <picture class="o-frm u-asp-sq u-frm-r-r j-cnt-auto">
            <source
              type="image/avif"
              srcset="
                ./img/thumb-320.avif   320w,
                ./img/thumb-640.avif   640w,
                ./img/thumb-960.avif   960w,
                ./img/thumb-1920.avif 1920w,
                ./img/thumb.avif      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
            />
            <source
              type="image/webp"
              srcset="
                ./img/thumb-320.webp   320w,
                ./img/thumb-640.webp   640w,
                ./img/thumb-960.webp   960w,
                ./img/thumb-1920.webp 1920w,
                ./img/thumb.webp      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
            />
            <img
              src="./img/thumb.png"
              srcset="
                ./img/thumb-320.png   320w,
                ./img/thumb-640.png   640w,
                ./img/thumb-960.png   960w,
                ./img/thumb-1920.png 1920w,
                ./img/thumb.png      1921w
              "
              sizes="
										(max-width: 320px) 320px,
										(max-width: 640px) 640px,
										(max-width: 960px) 960px,
										(max-width: 1920px) 1920px,
										100vw"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </div>
        <div class="o-stc c-fld u-mx-auto">
          <p class="c-fld-lim c-h5-ext u-dsp-tbl u-mx-auto u-fnt-wm">
            山田太郎(ヤマダタロウ)
          </p>
          <p
            class="c-fld-lim c-lbl-l u-dsp-tbl u-mb-s u-mx-auto u-fnt-en u-txt-dim"
          >
            Taro Yamada
          </p>
          <p class="c-prg-l u-mb-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="o-cls c-fld-lim u-mx-auto">
            <a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="Facebookへ"
              title="Facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">Facebookへ</span>
						</a>
						<a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="Twitterへ"
              title="Twitter"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">Twitterへ</span>
						</a>
						<a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="Instagramへ"
              title="Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">Instagramへ</span>
						</a>
						<a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="Linkedinへ"
              title="Linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">Linkedinへ</span>
						</a>
						<a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="note.comへ"
              title="note.com"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 548 619" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M235.044 272.175H162.151C153.522 272.175 150.662 271.716 146.245 270.388C134.322 266.865 125.028 254.941 125.028 240.797C125.028 226.652 134.322 214.755 146.22 211.18C150.662 209.878 153.522 209.444 162.151 209.444H209.41V162.134C209.41 153.504 209.87 150.645 211.198 146.228C214.721 134.075 226.644 125.011 240.789 125.011C254.908 125.011 266.856 134.279 270.405 146.228C271.707 150.645 272.167 153.504 272.167 162.134V235.027C272.167 239.444 272.167 243.861 271.273 247.844C269.85 253.497 266.921 258.659 262.799 262.781C258.676 266.904 253.514 269.832 247.861 271.256C243.878 272.15 239.461 272.175 235.044 272.175ZM469.194 539.9H78.2033V195.504C78.2033 191.087 79.7352 187.334 82.8246 184.27L184.236 82.8328C185.698 81.3353 187.452 80.1528 189.388 79.3581C191.324 78.5634 193.403 78.1732 195.496 78.2116H469.194V539.9ZM18.9955 137.649C8.60415 148.015 1.78721 161.062 0.434037 175.64C0.155072 178.79 0.010262 181.95 0 185.112L0 574.572C0 579.652 0.229785 582.282 0.434037 584.274C2.22125 600.869 17.2338 615.882 33.8039 617.644C35.7953 617.848 38.4506 618.078 43.5059 618.078H503.892C508.973 618.078 511.628 617.848 513.594 617.644C530.189 615.856 545.202 600.844 546.964 584.274C547.194 582.282 547.398 579.652 547.398 574.572V43.5141C547.398 38.4078 547.194 35.778 546.964 33.7866C545.177 17.2165 530.164 2.20395 513.619 0.442269C510.388 0.107417 507.14 -0.0375109 503.892 0.00823162H185.104C181.933 0.0185225 178.764 0.171868 175.606 0.467801C161.002 1.76991 147.981 8.63792 137.59 19.0038L18.9955 137.649Z"
                  fill="currentColor"
                ></path>
							</svg>
							<span class="sr-only">note.comへ</span>
						</a>
            <a
              href="#"
							class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
							aria-label="Goto substack"
							title="Substack"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                class="o-icn"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 448 511.471"
              >
                <path
                  fill="currentColor"
                  d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"
                ></path>
              </svg>
							<span class="sr-only">Substackへ</span>
            </a>
            <a
							href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
							aria-label="Goto Pinterest"
              title="Pinterest"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                class="o-icn"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="15.5"
                viewBox="0 0 496 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <path
                  opacity="1"
                  fill="#1E3050"
                  d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                ></path>
              </svg>
							<span class="sr-only">Pinterestへ</span>
            </a>
            <a
              href="#"
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              aria-label="Githubへ"
              title="GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
							<svg class="o-icn" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="sr-only">GitHubへ</span>
						</a>
            <a
              class="c-a c-h3-ext u-dsp-flx j-cnt-auto"
              href="#"
              target="_blank"
              rel="noopener"
              aria-label="Go to External Website"
            >
              <svg
                class="o-icn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>`
	loadingAdjust();
	setIntSize();
	return Bio
}
