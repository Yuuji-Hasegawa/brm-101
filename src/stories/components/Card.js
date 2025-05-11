import '../../styles/generic/_resets.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_card.scss'
import '../../styles/components/_holder.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_js.scss'
import '../../styles/utils/_frames.scss'
import '../../styles/utils/_text.scss'
import { loadingAdjust } from '../../scripts/loading-adjust.js';
import { setIntSize } from '../../scripts/set-int-size.js';

export const createCard = ({
	modifier,
}) => {
	const Card = document.createElement('a')
	Card.href = '#'
	Card.classList.add(
		...['o-stc', 'c-crd', 'c-crd--link', ...(modifier ? modifier.split(' ') : [])]
	);
	Card.innerHTML = `
			<div class="c-hld-spn u-pd-m">
              <picture class="o-frm u-ins-frm u-asp-sq u-frm-r-r j-cnt-auto">
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
                  >20yy.mm.dd</time
                >
              </span>
            </div>
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
            <div class="o-stc u-ins-stc u-space-m u-pd-m">
              <h3 class="c-h5-ext u-fnt-wb u-txt-trim u-txt-trim--2">
                セロもかっこうのかっか外国弾を砂糖から出一疋
              </h3>
              <p class="c-prg-l u-txt-dim u-txt-trim u-txt-trim--4">
                弾きすぎ君はゴーシュに恨めしんて今日の扉のうち弾から叫び第六音楽汁のかっかを見ていだござい。血は途中云いてだしまし。意地悪も一けり野ねずみのようを座ってくださいた。ゴーシュもヴァイオリンみみずくたりそれがありています。力は楽譜にまだとして腹がかっこうのようで降りて病院をはいりてぼろぼろセロにきってしまえまし。
              </p>
            </div>
				`
		loadingAdjust();
		setIntSize();
	return Card
}
