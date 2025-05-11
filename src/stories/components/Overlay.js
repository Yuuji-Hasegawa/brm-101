import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cover.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/components/_mask.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/utils/_js.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_spaces.scss'
import { loadingAdjust } from '../../scripts/loading-adjust.js';
import { setIntSize } from '../../scripts/set-int-size.js';

export const createOverlay = () => {
	const Overlay = document.createElement('div')
	Overlay.className = 'c-msk'
	Overlay.innerHTML = `
							<div class="c-msk__src">
                <picture class="o-frm j-cnt-auto">
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
							<div class="c-msk__surf o-cvr">
                <span
                  class="c-h1-ext u-mt-auto u-ml-auto u-pd-s u-dsp-flx"
									style="color: var(--c-txt-on-inverse-bg);background: var(--c-fill-inverse-bg);font-weight: 700;"
                >
                  Lorem ipsum
                </span>
              </div>`
		loadingAdjust();
		setIntSize();
	return Overlay
}
