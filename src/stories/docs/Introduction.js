import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/objects/_center.scss'
import '../../styles/objects/_icon.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_link.scss'
import '../../styles/components/_list.scss'
import '../../styles/utils/_display.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_flex.scss'
import '../../styles/utils/_text.scss'

export const createIntro = () => {
	const Intro = `<div class="o-ctr u-ins-ctr u-space-l u-pb-xl">
		<h1 class="c-h1 u-fnt-wb">Skelton Kit</h1>
		<p class="c-prg-l u-fnt-wm">
			<a class="c-a c-a--und" href="https://github.com/Yuuji-Hasegawa/skeleton-kit" target="_blank">
				skeleton-kit
				<svg class="o-icn u-ml-3xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path>
        </svg>
			</a>
			で使用しているUIコンポーネント集です。
		</p>
		<h2 class="c-h2 u-fnt-wb">コンセプト</h2>
		<h3 class="c-h3 u-fnt-wb">省エネファースト</h3>
		<div class="o-stc u-ins-stc u-space-m">
			<p class="c-prg-l u-fnt-wm"><span class="u-fnt-wb">簡単でラク</span>を最優先事項として位置付けています。</p>
			<p class="c-prg-l u-fnt-wm">
				デザインセンスがなくても、<span class="u-fnt-wb">適当に実装を進めるだけ</span>で、バランスの取れたキレイなUIが自然に仕上がります。
			</p>
			<p class="c-prg-l u-fnt-wm">
				規格統一によって初動を迅速にし、<span class="u-fnt-wb">心理的な負担を最小限</span>に。<br />
				<span class="u-fnt-wb">UIの一貫性と拡張性</span>を兼ね備えた、<span class="u-fnt-wb">快適な開発環境</span>を目指しています。
			</p>
		</div>
		<h3 class="c-h3 u-fnt-wb">FLOCSS x ユーティリティファースト</h3>
		<div class="o-stc u-ins-stc u-space-m">
			<p class="c-prg-l u-fnt-wm">CSS設計としては、<span class="u-fnt-wb">FLOCSS</span>（およびBEM）の考え方をベースにしつつ、<span class="u-fnt-wb">Tailwind</span>的なユーティリティファーストの利便性も採用しています。</p>
			<dl class="o-stc u-ins-stc u-space-xs">
				<dt class="c-h5-ext u-fnt-wb u-mt-l">Object</dt>
				<dd class="c-prg-l u-fnt-wm">
					<a class="c-a c-a--und" href="https://every-layout.dev" target="_blank">
					『Every Layout』
						<svg class="o-icn u-ml-3xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path>
						</svg>
					</a>で紹介されていた構造体をベースに、改良を施したオブジェクト群。<br />
					接頭辞は「<span class="u-fnt-wb">o-</span>」。
				</dd>
			</dl>
			<dl class="o-stc u-ins-stc u-space-xs">
				<dt class="c-h5-ext u-fnt-wb u-mt-l">Components</dt>
				<dd class="c-prg-l u-fnt-wm">
					ObjectでもUtilityでもない、見た目や機能を持ったUIモジュール。<br />
					接頭辞は「<span class="u-fnt-wb">c-</span>」。
				</dd>
			</dl>
			<dl class="o-stc u-ins-stc u-space-xs">
				<dt class="c-h5-ext u-fnt-wb u-mt-l">Utility</dt>
				<dd class="c-prg-l u-fnt-wm">
					余白や文字の太さ、背景色などを細かく調整するためのヘルパークラス群。<br />
					Tailwindにインスパイアされつつ、使いやすさを考慮して独自調整。<br />
					接頭辞は「<span class="u-fnt-wb">u-</span>」。
				</dd>
			</dl>
			<dl class="o-stc u-ins-stc u-space-xs">
				<dt class="c-h5-ext u-fnt-wb u-mt-l">Javascript</dt>
				<dd class="c-prg-l u-fnt-wm">
					クライアント側のJavascriptで目印として使用されるクラス。<br />
					接頭辞は「<span class="u-fnt-wb">j-</span>」。
				</dd>
			</dl>
			<p class="c-prg-l u-fnt-wm">
				マルチクラスによる快適な実装スタイルと、足りない分は後から追加できる柔軟性。<br />
				<span class="u-fnt-wb">堅牢さと拡張性を両立</span>したCSS設計になっています。
			</p>
		</div>
		<h3 class="c-h3 u-fnt-wb">数理的な設計思想</h3>
		<div class="o-stc u-ins-stc u-space-m">
			<p class="c-prg-l u-fnt-wm">
				スペーシングやサイズは<span class="u-fnt-wb">フィボナッチ数列</span>に基づいて設計されています。<br />
				0.5rem = 8pxを<span class="u-fnt-wb">Sサイズ</span>とし、黄金比に基づいたスケールを実装しています。
			</p>
			<p class="c-prg-l u-fnt-wm">
				テキストは、調和数列を基にした
				<a class="c-a c-a__und u-fnt-wb" href="https://standard.shiftbrain.com/blog/harmonic-modular-scale-tools" target="_blank">
					ハーモニックモジュラースケール
					<svg class="o-icn u-ml-3xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path>
					</svg>
				</a>
				を採用しています。<br />
				1rem = 16pxを<span class="u-fnt-wb">Mサイズ</span>とし、<span class="u-fnt-wb">6xs</span>から<span class="u-fnt-wb">6xl</span>まで上下にそれぞれ7段階のスケールを実装しています。
			</p>
			<p class="c-prg-l u-fnt-wm">
				カラーマネジメントは、
				<a class="c-a c-a__und u-fnt-wb" href="https://m3.material.io/styles/color/system/overview" target="_blank">
					Material Design 3
					<svg class="o-icn u-ml-3xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path>
					</svg>
				</a>
				が提唱する<span class="u-fnt-wb">HCT（Hue, Chroma, Tone）空間</span>に基づいたカラーマネジメントを採用しています。<br />
				セマンティックなカラートークンを適切に運用することで、light/darkのどちらでも<span class="u-fnt-wb">十分なコントラストを保った配色</span>が実現できます。
			</p>
		</div>
		<h2 class="c-h2 u-fnt-wb">技術的な要件</h2>
		<h3 class="c-h3 u-fnt-wb">レスポンシブ対応</h3>
		<div class="o-stc u-ins-stc u-space-m">
			<p class="c-prg-l u-fnt-wm">
				メディアクエリによるブレイクポイントに加え、<span class="u-fnt-wb">clamp()</span>関数を活用した擬似的なレスポンシブ、以下の機能も実装されています。
			</p>
			<ul class="c-ul">
				<li class="c-prg-l u-fnt-wm">content-visibilityによる<span class="u-fnt-wb">レンダリングの最適化</span></li>
				<li class="c-prg-l u-fnt-wm">IntersectionObserverを用いた<span class="u-fnt-wb">Lazy Load</span></li>
				<li class="c-prg-l u-fnt-wm">明示的なサイズ指定による<span class="u-fnt-wb">レイアウトシフト（CLS）</span>の抑制</li>
			</ul>
		</div>
		<h3 class="c-h3 u-fnt-wb">カスタムプロパティ</h3>
		<div class="o-stc u-ins-stc u-space-m">
			<p class="c-prg-l u-fnt-wm">
				<span class="u-fnt-wb">ローカルなカスタムプロパティ</span>の宣言とデフォルト設定、<span class="u-fnt-wb">グローバルなカスタムプロパティ</span>を使い分けることで、柔軟なCSSを実現しています。
			</p>
			<p class="c-prg-l u-fnt-wm">
				グローバル変数をローカルに中継する<span class="u-fnt-wb">コネクタ</span>を併用することで
			</p>
			<ul class="c-ul">
				<li class="c-prg-l u-fnt-wm">CSSの<span class="u-fnt-wb">カスケーディングを最小限に抑制</span></li>
				<li class="c-prg-l u-fnt-wm">任意のスコープでの<span class="u-fnt-wb">容易な上書きと再定義</span></li>
			</ul>
			<p class="c-prg-l u-fnt-wm">
				を両立し、<span class="u-fnt-wb">柔軟かつ堅牢な構築</span>が可能となっています。
			</p>
		</div>
	</div>`
	return Intro
}
