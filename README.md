# BRM-101

[Skeleton Kit](https://github.com/Yuuji-Hasegawa/skeleton-kit) をベースに拡張した **WordPressサイト用スターターキット**。

[bx-00](https://github.com/Yuuji-Hasegawa/wp-bx-00) を元に [Skeleton Kit](https://github.com/Yuuji-Hasegawa/skeleton-kit) に統合・再設計された正式採用モデル

---

## 型番について

**BRM-101** とは、
**BLUE B NOSE Rigged Model - 1カラム・0系・1番艦** を表す型番。

- **B**: BLUE B NOSE（ブランド名）
- **RM**: Rigged Model（艤装済モデル）
- **101**:
	- `1`: 1カラム構成
	- `0`: 0系（汎用系）
	- `1`: 1番艦（ナンバリング）

> 「off‐the‐shelf = すぐに使える」艤装済のWordPressテーマ

## 特徴
- **Bun + Vite** による高速ビルド&amp;開発環境
- **Dart Sass + カスタムプロパティ** による堅牢かつ柔軟な設計
- **画像最適化** + **Avif / WebP** 自動生成
- **Material Design 3** 準拠のカラーパレット自動生成
- StorybookによるUIコンポーネントの管理
- **`setting.json` + `page-*.php` による構成管理**
	→ **管理画面を極力触らない** がコンセプト

## 使い方

このリポジトリはテンプレートとして利用できます。以下の手順でご自身のプロジェクトに導入してください。

1. テンプレートからリポジトリを作成

-  [Use this template](https://github.com/Yuuji-Hasegawa/brm-101/generate) をクリックして、新しいリポジトリを作成。
- 作成したリポジトリを clone。

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. 開発環境を用意

このプロジェクトでは以下の環境が必要です:

- [bun](https://bun.sh)
- Node.js
- WordPress用ローカルサーバー (XAMPP / MAMP など)
- wp-cli

**`bun` のインストール方法**:

```bash
curl -fsSL https://bun.sh/install | bash
```

その他のインストール方法

- [Node.js公式サイト](https://nodejs.org/ja/download)
- [XAMPP公式サイト](https://www.apachefriends.org/jp/index.html)
- [MAMP公式サイト](http://www.mamp.info/en/)
- [wp-cli公式サイト](https://wp-cli.org/ja/)

* `XAMPP` または `MAMP` の `htdocs` 配下での使用を想定しています。

3. 依存のインストール

```bash
bun install
```

4. 開発サーバーの起動

```bash
bun run dev
```

5. Storybookの起動

```bash
bun run sb
```

6. WordPressのセットアップ

WordPress は ルートの `/wp` にインストールしてください。

```bash
wp core download --locale=ja
```

別のディレクトリで使用する場合は、`.gitignore` や `vite.config.js` の `outDir` を調整してください。

### コマンド一覧

`package.json` に以下の `script` を設定しています。

| コマンド          | 説明                               |
|------------------|-----------------------------------|
| `dev`            | 開発用ローカルサーバーを起動           |
| `build`          | CSSのbuildとJavascriptのバンドルなど |
| `sb`             | Storybookの起動（開発用）            |
| `sb:build`       | Storybookのビルド（公開用）          |
| `lint`           | 各種Lintを一括実行                  |
| `lint:eslint`    | ESLintによるコードチェック           |
| `lint:prettier`  | Prettierによるコード整形チェック      |
| `lint:style`     | StylelintによるScssチェック         |
| `fix`            | 各種自動修正を一括実行                |
| `fix:eslint`     | ESLintによる修正                    |
| `fix:prettier`   | Prettierによるコード整形             |
| `fix:style`      | Stylelintによるスタイル修正          |
| `clean:eslint`   | ESLintのキャッシュや不要ファイルの削除  |
| `clean:style`    | Stylelintのキャッシュ削除など         |
| `clean:lint`     | Lint関連全体のクリア                 |
| `clean:icon`     | アイコン生成のキャッシュ削除           |
| `clean:opt`      | 画像最適化のキャッシュ削除             |
| `clean:gen`      | 画像生成のキャッシュ削除               |
| `clean:resize`   | 画像リサイズのキャッシュ削除            |
| `color`          | カラー関連の処理を一括実行              |
| `color:palette`  | カラーパレットの生成                   |
| `color:altcolor` | 代替カラーの生成                      |
| `image`          | 画像関連の処理を一括実行               |
| `image:opt`      | 画像の最適化                         |
| `image:gen`      | AVIF / WebPの生成                   |
| `image:resize`   | 画像のリサイズ                       |
| `image:icon`     | アイコンの生成                       |
| `partytown`      | partytownを `public/` にコピー      |

実行する際は、`bun run` をつけて以下のように実行してください。

```bash
bun run dev
```

## ディレクトリ構成

### ルートディレクトリ

- `.env`
  カラーパレットのシードとして使用される環境変数を定義
	- `COLOR_MY_BRAND`, `COLOR_REF_` を格納

- `npm-scripts/`
	独自のスクリプトを格納（`bun run` 経由で実行）
	- `palette_gen.js`: `.env` を元にカラーパレットを自動生成
	- `altcolor_gen.js`: 代替カラーパレットを生成
	- `opt.js`: `src/images` の画像を最適化し、`public/img` に出力
	- `gen.js`: AVIF / WebPを生成し、 `public/img` に出力
	- `resize.js`: 画像のリサイズ + AVIF / WebP を出力
	- `icon.js`: `public/pwa/icons/icon.png` を元に PWA 向けアイコンを生成

---

### `public/`

静的ファイル群

- `favicon.ico`: favicon
- `fonts/`: Webフォントなど
- `img/`: 最適化・変換された画像の出力先
	- `img/ogp.png`: 最適化不要の画像
	- `img/ogp-1x1.png`: 最適化不要の画像
- `pwa/`: PWA関連ファイル
	- `manifest.json`
	- `sw.js`
	- `icons/`: 各サイズのアイコンが生成される
		- `icon.png`: リサイズの元となる画像

---

### `src/`

開発用のメインディレクトリ

- `index.html`: エントリポイント（Vite向け）
- `images/`: 最適化を加えたい画像を配置
	- `favicon.svg`
	- `thumb.png`
- `scripts/`
	- `main.mjs`: JSエントリポイント
- `styles/`
	- `style.scss`: Scssエントリポイント。`@use` を使って以下の順でスタイルを読み込んでいます。
		- `@use generic;`
		- `@use objects;`
		- `@use components;`
		- `@use utils;`
	- `components/`: `c-` で始まるコンポーネント
	- `generic/`: 全体に適用する `reset`
	- `objects/`: `o-` で始まるオブジェクト
	- `settings/`: `font` や `space` などの設定を配置
	- `tools/`: `media query`などのツール群
	- `utils/`: `u-` で始まるヘルパー
		- `_index.scss`: 各ディレクトリ内のファイルを、`@forward` で統合

---

### `wp/wp-content/themes/brm-101/` （WordPressテーマ）

- `bun run build` により出力される、WordPress用のテーマ本体
- テンプレートファイル
	- `front-page.php`: トップページ用テンプレート
	- `page-*.php`: `slug` に応じて使用される固定ページテンプレート群
- スタイル・スクリプト
	- `style.css`: テーマ情報（ヘッダーコメント付きの WordPress 管理用CSS）
	- `css/style.css`: 実際にテーマで使用されるコンパイル済みCSS
	- `js/app.js`: テーマで使用されるメインのJavaScript
- その他の構成要素
	- `pwa/`: PWA関連ファイル一式
	- `~partytown/`: `partytown` ライブラリ一式
	- `lib/`:
		- `setting.json`: サイト別の設定ファイル

## スタイリングの基本方針

以下の設計思想に基づいてスタイルを構成しています

- **Dart Sass**
- 独自の **FLOCSS** ベース (`o-`/`c-`/`u-`)
- ユーティリティファースト の思想を併用
- **カスタムプロパティ**（CSS変数）を積極活用
- **@layer** を使った明確なレイヤー分離

## CSS Layer構成 (@layer)

```scss
@layer default, layout, theme, utilities;
```

- `default`: リセットやデフォルトのスタイル
- `layout`: `o-*` `c-*` による構造・レイアウト定義
- `theme`: カラーや装飾など、見た目に関するレイヤー
- `utilities`: `u-*` などの単機能ユーティリティ群

## カスタムプロパティ

### ローカル変数

```scss
.o-grd {
  display: grid;
  gap: var(--grd-gtt, setting.f-get-space(l));
}
```

例: `--grd-gtt` を上書きすることで、余白サイズだけを柔軟に調整可能です（設定がない場合は `l` サイズが使用されます）。

### グローバル変数

- `--c-*`: `prefers-color-scheme: dark` によるカラースキーム切替に対応。
- `--f-*`: フォントサイズ
- `--s-*`: 幅・余白などのサイズスケール
- `--custom-space`: ローカル変数が `--s-*` を受け取るための中継プロパティ

```scss
body {
  min-height: 100svh;
  font-size: var(--f-m, 1rem);
}
```

### スタイリングに関する補足

- **favicon**:`.ico` と `.svg` の併用を想定
- **FontAwesome**: `<svg>` によるインライン埋め込みを推奨。(Webフォントや不要なCSSの読み込みを回避)
- **font-display**: `@font-face` では `optional` を想定。（レンダリングブロックを回避）
	- ロゴなど、特定のフォントを前提とする部分については、**SVG形式によるインライン埋め込み** を推奨

#### 画像表示

- `<picture>` 要素: `Avif` / `WebP` の両形式を使用。Redina対応のため `2x` 出力画像の使用を推奨
- `width` / `height`: 基本的に `100%` を指定。アスペクト比は `<picture>` 側で調整
- **表示最適化属性**:
	- `loading="lazy"`
	- `decoding="async"`
	- `fetchpriority="low"`
	- ファーストビュー判定は `.j-cnt-auto` をマーカーとし、JSで属性を動的に変更
- `srcset` / `sizes` の設定例:

```html
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
```

#### その他

- `.j-io-lzy`: `iframe` を IntersectionObserver で遅延読み込み (`loading="lazy"` では不十分なため)
- **アコーディオン**: ネイティブな`<details>` 要素の使用を想定
- **ドロワー**: `<dialog>` 要素の使用を想定

## カスタマイズガイド

`bun run dev` を実行する前に、以下の初期設定を調整してください。

### カラーリング

- `.env`
	- ブランドカラーは `COLOR_MY_BRAND`を編集してください。
	- 必要に応じて、`COLOR_REF_*` や他の `COLOR_*` 系変数も調整可能です。
	- 編集後は以下を実行してパレットを再生成してください：
		- `bun run color` （一括生成）
		- または `bun run color:palette` / `bun run color:altcolor`
- `src/styles/settings/_color.scss`
	Scssのカラー定義を調整する場合は、こちらを編集してください。
- **カラースキーム切り替え**
	- `prefers-color-scheme: dark` を用いた切り替えがデフォルト
	- 別の切り替え用いる場合は、`src/styles/settings/_reset.scss` の以下の部分を編集してください。

```scss
:root {
  @each $key, $name in setting.$semantic-light {
    --c-#{$key}: #{($name)};
  }
  
  @include tool.darkmode {
    @each $key, $name in setting.$semantic-dark {
      --c-#{$key}: #{($name)};
    }
  }
}
```

---

### 画像

- 差し替え対象:
	- `public/favicon.ico`
	- `public/img/ogp.png`, `ogp-1x1.png`
	- `public/img/pwa/icons/icon.png`
	- `src/images/*`
- 差し替え後、以下を実行してください
	- `bun run image` （画像の最適化・変換を一括実行）
- キャッシュ削除が必要な場合は以下のスクリプトも活用してください
	-	`bun run clean:icon`
	- `bun run clean:opt`
	- `bun run clean:gen`
	- `bun run clean:resize`

---

### フォント

- 規定では、`Roboto Flex (.woff2)` を使用しています (`public/fonts/`)
- フォントを変更する場合は
	- `src/styles/settings/_fonts.scss` にて、`@font-face` やライセンス表記などを調整してください

---

### Scssスケール

- `src/styles/settings/`: 以下のファイル群でフォントスケールやサイズスケールを調整可能です

---

### サイトごとの固有情報

以下のファイルで管理しています。

- `wp/wp-content/themes/brm-101/lib/setting.json` 

GTMのコードや認証コード、企業名等はこちらをご利用ください

## 使用を想定しているプラグイン

本テーマで推奨するプラグインは以下の通りです。

1. Akismet Anti-spam: Spam Protection
2. Contact Form7（＋reCAPTCHAv3）
3. Honeypot for Contact Form 7
4. Flamingo
5. Edit Author Slug
6. EWWW Image Optimizer
7. WP Mail SMTP
8. WP Multibyte Patch
9. XML Sitemap Generator for Google

一括でインストールコマンド:

```bash
wp plugin install akismet contact-form-7 contact-form-7-honeypot flamingo edit-author-slug  ewww-image-optimizer wp-mail-smtp wp-multibyte-patch google-sitemap-generator
```

## その他仕様・開発メモ

- CSSおよびJavascriptの読み込みは主に、`wp_enqueue_scripts` で制御しています
- CSSはインライン化されるように設定しています。(`str_replace()` による相対パス変換あり)
- Gutenberg用のファイルは読み込みを無効化しています。必要に応じて `lib/management.php` などを調整してください。
- Googleアナリティクスは `partytown` を通じたGTM利用による挿入を想定。認証コードは、`lib/setting.json` をご利用ください。
- jQueryの読み込み方法を一部変更しています。`inquiry` ページ以外での読み込みは無効化していますので、適宜調整ください。
- カスタム投稿として、`news` を実装済
- アーカイブのURLとして、`blog` を想定
- `json-ld` による `Breadcrumbs`、`NewsArticle` の構造化データ対応
