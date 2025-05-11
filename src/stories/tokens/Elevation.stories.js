import { createElevation } from './Elevation';

export default {
  title: 'Tokens/Elevation',
  tags: ['autodocs'],
  render: () => createElevation(),
}

/**
 * `map.get($shadows, $key)`で`$shadows`マップに格納された値を取得可能
 *
 * 詳細は、`/src/styles/settings/_colors.scss`をご確認ください。
 * - `$shadows(key: value)`:`box-shadow`を格納したマップ
 * - `level4`と`level5`は特別な要素やアニメーションなどに使用
 */

export const Examples = {}
