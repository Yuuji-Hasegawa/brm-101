import '../../styles/generic/_resets.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/objects/_sidebar.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_row.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_js.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_text.scss'
import { loadingAdjust } from '../../scripts/loading-adjust.js';
import { setIntSize } from '../../scripts/set-int-size.js';

export const createMedia = ({
	size,
}) => {
	const Media = document.createElement('div')
	Media.className = 'o-sdb c-mda'
	Media.style.backgroundColor = 'var(--c-fill-neutral)'
	if (size) {
		Media.classList.add('u-ins-sdb', `u-space-${size}`)
	}
	Media.innerHTML = `
		<div class="c-mda__img">
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
        <div class="c-mda__txt">
          <h2 class="c-h4-ext u-fnt-wb u-mb-m">
            セロもかっこうのかっか外国弾を砂糖から出一疋
          </h2>
          <p class="c-prg-l u-mb-m u-txt-trim u-txt-trim--3">
            弾きすぎ君はゴーシュに恨めしんて今日の扉のうち弾から叫び第六音楽汁のかっかを見ていだござい。血は途中云いてだしまし。意地悪も一けり野ねずみのようを座ってくださいた。ゴーシュもヴァイオリンみみずくたりそれがありています。力は楽譜にまだとして腹がかっこうのようで降りて病院をはいりてぼろぼろセロにきってしまえまし。
          </p>
          <span class="c-lbl-l u-py-xs u-px-s" style="background-color: var(--c-fill);color:var(--c-txt-on-fill);">カテゴリー名</span>
        </div>
				`
		loadingAdjust();
		setIntSize();
	return Media
}
