import '../../../styles/generic/_resets.scss'
import '../../../styles/objects/_stack.scss'
import '../../../styles/objects/_frame.scss'
import '../../../styles/components/_holder.scss'
import '../../../styles/components/_text-sizes.scss'
import '../../../styles/components/_accessory.scss'
import '../../../styles/utils/_spaces.scss'
import '../../../styles/utils/_js.scss'
import '../../../styles/utils/_text.scss'
import '../../../styles/utils/_frames.scss'
import { loadingAdjust } from '../../../scripts/loading-adjust.js';
import { setIntSize } from '../../../scripts/set-int-size.js';

export const createSpine = () => {
	const Spine = document.createElement('div')
	Spine.className = 'c-hld-spn'
	Spine.innerHTML = `<picture class="o-frm u-asp-sq u-frm-r-r j-cnt-auto">
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
              <span class="o-stc">
                <span class="c-h5-ext u-fnt-wb u-txt-trim">山田 太郎</span>
                <time
                  datetime="20yy-mm-dd"
                  class="c-prg-m u-fnt-wl u-txt-dim u-fnt-en"
                >
									20yy.mm.dd</time>
              </span>`
	loadingAdjust();
	setIntSize();
	return Spine
}
