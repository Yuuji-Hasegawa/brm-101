import { createSpacing } from './Spacing';

export default {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
  render: () => createSpacing(),
}

/**
 * `f-get-space($scale, $unit)`関数で`$spaceScale`マップに格納された値を取得可能
 *
 * 詳細は、`/src/styles/settings/_sizes.scss`をご確認ください。
 * - `$spaceScale(key: value)`:`spaceScale`を格納したマップ
 * - 第二引数`$unit`により、`px`/`rem`/`em`単位で値を取得可能です
 */

export const Examples = {}
