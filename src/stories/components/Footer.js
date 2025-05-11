import '../../styles/generic/_resets.scss'
import '../../styles/objects/_center.scss'
import '../../styles/objects/_cluster.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/objects/_sidebar.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_link.scss'
import '../../styles/components/_footer.scss'
import '../../styles/components/_accessory.scss'
import '../../styles/components/_logo.scss'
import '../../styles/utils/_display.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_flex.scss'
import '../../styles/utils/_js.scss'
import '../../styles/utils/_text.scss'
import { loadingAdjust } from '../../scripts/loading-adjust.js';
import { setIntSize } from '../../scripts/set-int-size.js';

export const createFooter = () => {
	const Footer = document.createElement('div')
	Footer.className = 'c-gnd'
	const thumb = document.createElement('picture')
	thumb.className = 'o-frm j-cnt-auto'
	thumb.innerHTML = `<source
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
	`
	Footer.appendChild(thumb)
	const FooterInner = document.createElement('footer')
	FooterInner.className = 'o-ctr u-ins-ctr u-space-none u-py-2xl'
	const FooterUpper = document.createElement('div')
	FooterUpper.className = 'o-sdb u-mb-m'
	const UpperFit = document.createElement('div')
	UpperFit.className = 'c-fld-fit'
	const UpperList = document.createElement('ul')
	UpperList.className = 'o-cls u-mb-m'
	UpperList.innerHTML = `<li>
                <a
                  class="c-prg-l c-a u-fnt-en u-fnt-wm u-dsp-blc u-hit-exp"
                  href="#"
                >
									About Us
								</a>
              </li>
              <li>
                <a
                  class="c-prg-l c-a u-fnt-en u-fnt-wm u-dsp-blc u-hit-exp"
                  href="#"
                >
									Services
								</a>
              </li>
              <li>
                <a
                  class="c-prg-l c-a u-fnt-en u-fnt-wm u-dsp-blc u-hit-exp"
                  href="#"
                >
									Examples
								</a>
              </li>
              <li>
                <a
                  class="c-prg-l c-a u-fnt-en u-fnt-wm u-dsp-blc u-hit-exp"
                  href="#"
                >
									Access
								</a>
              </li>
              <li>
                <a
                  class="c-prg-l c-a u-fnt-en u-fnt-wm u-dsp-blc u-hit-exp"
                  href="#"
                >
									Inquiry
								</a>
              </li>`
	const UpperBottomList = document.createElement('ul')
	UpperBottomList.className = 'o-cls'
	UpperBottomList.innerHTML = `<li>
                <a
                  class="c-prg-m c-a u-fnt-en u-fnt-wl u-dsp-blc u-py-s"
                  href="#"
                >
									Company
								</a>
              </li>
              <li>
                <a
                  class="c-prg-m c-a u-fnt-en u-fnt-wl u-dsp-blc u-py-s"
                  href="#"
                >
									Terms of Use
								</a>
              </li>
              <li>
                <a
                  class="c-prg-m c-a u-fnt-en u-fnt-wl u-dsp-blc u-py-s"
                  href="#"
                >
									Privacy Policy
								</a>
              </li>`
	UpperFit.appendChild(UpperList)
	UpperFit.appendChild(UpperBottomList)
	const UpperPush = document.createElement('div')
	UpperPush.className = 'c-fld-push u-ml-auto'
	const UpperPushHeadding = document.createElement('h3')
	UpperPushHeadding.className = 'c-h4-ext u-fnt-en u-fnt-wm'
	UpperPushHeadding.innerText = 'Follow Us'
	const SnsList = document.createElement('ul')
	SnsList.className = 'o-cls'
	SnsList.innerHTML = `<li>
                <a
                  class="c-a c-h2-ext u-dsp-flx u-pd-s j-cnt-auto"
                  href="#"
                  aria-label="Facebookへ"
                  title="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
									<svg class="o-icn"
										viewBox="0 0 512 512"
										xmlns="http://www.w3.org/2000/svg"
									>
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="sr-only">Facebookへ</span>
								</a>
              </li>
              <li>
                <a
                  class="c-a c-h2-ext u-dsp-flx u-pd-s j-cnt-auto"
                  href="#"
                  aria-label="Twitterへ"
                  title="Twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
									<svg class="o-icn"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      fill="currentColor"
                    ></path>
									</svg>
									<span class="sr-only">Twitterへ</span>
								</a>
              </li>
              <li>
                <a
                  class="c-a c-h2-ext u-dsp-flx u-pd-s j-cnt-auto"
                  href="#"
                  aria-label="Instagramへ"
                  title="Instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
									<svg class="o-icn"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="sr-only">Instagramへ</span>
                </a>
              </li>
              <li>
                <a
                  class="c-a c-h2-ext u-dsp-flx u-pd-s j-cnt-auto"
                  href="#"
                  target="_blank"
                  rel="noopener"
                  aria-label="Goto Pinterest"
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
                      fill="currentColor"
                      d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                    ></path>
									</svg>
									<span class="sr-only">Pinterestへ</span>
                </a>
              </li>`
	UpperPush.appendChild(UpperPushHeadding)
	UpperPush.appendChild(SnsList)
	FooterUpper.appendChild(UpperFit)
	FooterUpper.appendChild(UpperPush)
	const FooterBottom = document.createElement('div')
	FooterBottom.className = 'o-cls u-flx-y-ctr'
	const FooterBottomLogo = document.createElement('a')
	FooterBottomLogo.className = 'c-logo c-logo--ft c-h1-ext u-dsp-ifx'
	FooterBottomLogo.href = '#'
	FooterBottomLogo.title = '仮面ライター'
	FooterBottomLogo.setAttribute('aria-label', '仮面ライターのトップページへ')
	FooterBottomLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1048 563">
              <path
                class="c-logo-fll"
                d="M78.809 281.081C-2.016 378.968 202.286 562.159 236.36 430.153c21.27-89.488-76.642-225.835-166.017-144.844"
              />
              <path
                class="c-logo-drw"
                d="M361.157 22.433c21.27-29.792 63.809-34.048 59.555 12.768a58.695 58.695 0 0 1-68.062-17.024zm-23.596 8.654c-33.847 13.747-67.326 27.494-99.627 43.326a584.7 584.7 0 0 0-91.942 54.632 302.9 302.9 0 0 0-73.479 75.189 226 226 0 0 0-23.822 47.227 239 239 0 0 0-7.742 25.706c-1.078 4.383-1.985 8.796-2.836 13.264-.85 4.469-1.531 8.952-2.212 13.478-.411-4.554-.553-9.137-.61-13.733-.057-4.597.17-9.193.483-13.803a184 184 0 0 1 4.04-27.494 197.2 197.2 0 0 1 20.05-52.263 235 235 0 0 1 33.125-45.397c6.352-6.895 13.101-13.392 20.064-19.634s14.279-12.045 21.738-17.62a429.7 429.7 0 0 1 97.173-53.015 540 540 0 0 1 105.597-29.863m-305.9 376.411c-.711 5.183-1.668 10.292-2.62 15.373l-.215 1.155-3.163 16.3c-2.084 10.81-4.111 21.536-5.672 32.204a189.7 189.7 0 0 0-2.268 31.366c.076 4.832.675 9.64 1.786 14.343a36 36 0 0 0 2.085 6.128l.23.489q.216.45.436.93l.355.638.496.851a32 32 0 0 0 1.73 2.583 31.6 31.6 0 0 0 9.373 8.512 47.4 47.4 0 0 0 12.762 5.334 111.3 111.3 0 0 0 30.359 3.121 298 298 0 0 0 32.202-2.525 610 610 0 0 0 16.349-2.242l1.829-.275.014-.003c4.863-.732 9.744-1.466 14.69-2.134-4.906 2.738-9.925 5.178-15.086 7.434-5.162 2.255-10.366 4.256-15.683 6.185a179 179 0 0 1-33.11 8.243 156 156 0 0 1-8.664.964c-2.907.242-5.856.326-8.834.326a88 88 0 0 1-18.093-1.773 62.2 62.2 0 0 1-18.023-6.71 49.6 49.6 0 0 1-15.059-13.449 50 50 0 0 1-2.836-4.341l-.596-1.05-.623-1.177a40 40 0 0 1-1.134-2.369 50 50 0 0 1-3.092-9.576 78 78 0 0 1-1.532-18.556c.201-5.887.822-11.751 1.858-17.549.965-5.675 2.283-11.349 3.772-16.783a287.5 287.5 0 0 1 25.977-61.967m230.266 116.33a24 24 0 0 1-2.552-.412l-.009-.002a74 74 0 0 1-2.416-.665 30.4 30.4 0 0 1-4.609-1.872l-.388-.617a200 200 0 0 1-2.078-3.356 65 65 0 0 1-1.901-3.361 146 146 0 0 1-6.75-14.995l-.314-.794-.345-.875-.597-1.52-.014-.034c-1.508-3.843-2.98-7.593-4.6-11.134a65 65 0 0 0-3.361-6.441c.1-1.419.142-2.838.184-4.426v-4.838a23 23 0 0 1 2.524.496c.808.228 1.603.497 2.411.795a31 31 0 0 1 4.552 2.171 76 76 0 0 1 3.956 7.561c1.759 3.842 3.263 7.669 4.731 11.403q.691 1.764 1.381 3.493a135 135 0 0 0 6.21 13.846 48 48 0 0 0 3.814 6.185l.085 4.483zm-54.105-29.416c-.393-.15-.789-.301-1.224-.432q-.132.185-.253.366-.17.254-.33.507c-.196.306-.391.61-.622.929l-.894 1.773a29 29 0 0 0-1.418 3.505c.422.874.798 1.755 1.171 2.633l.003.006.002.005c.341.799.68 1.595 1.05 2.378 1.504 3.291 3.092 6.497 4.652 9.618 1.559 3.121 3.091 6.214 4.509 9.278a130 130 0 0 1 1.999 4.597q.732.305 1.46.612l.053.023c.797.338 1.6.677 2.436 1.015.983.398 2.013.795 3.141 1.187a33 33 0 0 0 3.36-7.094 123 123 0 0 0-1.643-3.829q-.27-.599-.54-1.193c-1.222-2.677-2.511-5.278-3.781-7.844l-.373-.753-.497-1.007-.008-.015-.029-.061c-1.533-3.109-3.038-6.162-4.445-9.202a86 86 0 0 0-.579-1.305 52 52 0 0 1-.884-2.034 19 19 0 0 1-.465-1.271 45 45 0 0 0-3.318-1.419l-1.787-.695q-.215-.075-.425-.155l-.313-.119zM146.9 210.959a101 101 0 0 1 14.18-11.534 126 126 0 0 1 16.037-9.065 154.7 154.7 0 0 1 35.152-11.491 217.8 217.8 0 0 1 74.075-1.532 235 235 0 0 1 36.442 8.271 214 214 0 0 1 34.826 14.186 177.5 177.5 0 0 1 31.79 20.911 137 137 0 0 1 26.077 28.614 114.5 114.5 0 0 1 9.444 17.237 102.2 102.2 0 0 1 8.348 51.096h-17.955a88.25 88.25 0 0 0-7.352-43.549 97 97 0 0 0-8.026-14.456 120.4 120.4 0 0 0-22.404-24.897 168 168 0 0 0-28.231-19.393 240.3 240.3 0 0 0-135.56-27.55 168.6 168.6 0 0 0-34.655 7.235 125.5 125.5 0 0 0-16.533 6.71 113 113 0 0 0-15.655 9.207"
              />
              <path
                class="c-logo-ltr"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m934.637 444.857-17.582 30.667h114.485l16.36-30.667zm-49.884-97.315-77.962 119.395 14.175 27.804 31.348-44.841h27.26l-60.788 94.453h36.254l128.527-196.811zm14.72 33.392-26.714 41.298h23.443l26.169-41.298zm-19.763-33.392h-55.745L715.882 455.488l-19.354 56.972 82.186-73.873-41.57 105.766h34.074l48.93-127.3h-19.626zm-205.126 0-9.541 32.711h85.594l53.428-32.711zm-36.255 56.154-9.54 31.62h53.428l-77.416 109.037h39.253l107.401-140.657zm-323.021 85.321 90.5-141.475h37.618l-48.794 69.511h22.353l-49.067 127.3h-26.169l35.71-100.041-38.436 55.881zm134.796-141.475-78.37 196.811h22.353l34.074-70.874 4.634 11.449-31.893 59.425h27.259l14.72-27.532 9.268 27.532h14.175l6.801-24.601-13.889-33.188 48.522-82.868h-48.522l13.357-23.443h38.708l27.26-32.711zm-3.134 83.685-3.271 5.452 5.451 14.175 11.449-19.627zm97.451-83.685-13.629 32.711h38.163l-19.763 23.443h-39.39l-41.843 140.657h120.486l44.16-140.657h-53.701l23.988-23.443h36.255l29.168-32.711zm-17.309 83.413-24.261 84.231h8.45l23.443-84.231zm35.437 83.958 24.533-83.958h6.542l-23.443 83.958zm-5.725-84.776-2.453 8.45h8.587l3.134-8.45zm-13.902 46.886 1.908-8.996h8.996l-1.636 8.996zm-8.178 27.395-2.453 10.768h8.859l2.726-10.768z"
              />
            </svg>
            <span class="sr-only">仮面ライターのトップページへ</span>`
	const FooterCopyright = document.createElement('span')
	FooterCopyright.className = 'c-sml-l u-fnt-en'
	FooterCopyright.innerText = '©︎ kamenwriter.com'
	FooterBottom.appendChild(FooterBottomLogo)
	FooterBottom.appendChild(FooterCopyright)
	FooterInner.appendChild(FooterUpper)
	FooterInner.appendChild(FooterBottom)
	Footer.appendChild(FooterInner)
	loadingAdjust();
	setIntSize();
	return Footer
}
