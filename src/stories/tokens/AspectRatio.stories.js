import { createAspectRatio } from './AspectRatio';

export default {
  title: 'Tokens/AspectRatio',
  tags: ['autodocs'],
  render: () => createAspectRatio(),
}

/**
 * `map.get($aspect, $key)`で`$aspect`マップに格納された値を取得可能
 *
 * 詳細は、`/src/styles/settings/_sizes.scss`をご確認ください。
 * - `$aspect(key: value)`:アスペクト比を格納したマップ
 */

export const Examples = {}
