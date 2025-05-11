import { createTypography } from './Typography';

export default {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
	render: () => createTypography(),
}

/**
 * `f-font-size($scale, $unit)`関数で`$fontScale`マップに格納された値を取得可能
 *
 * 詳細は、`/src/styles/settings/_fonts.scss`をご確認ください。
 * - `$fontScale(key: value)`:`fontScale`を格納したマップ
 * - 第二引数`$unit`により、`rem`/`em`単位で値を取得可能です
 */

export const Examples = {}
