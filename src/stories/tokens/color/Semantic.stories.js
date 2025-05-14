import { createSemanticColor } from './Semantic';

export default {
  title: 'Tokens/Color/Semantic',
  tags: ['autodocs'],
  render: () => createSemanticColor(),
}

/**
 * **プリミティブカラー**から、**Material Design 3**に基づいた**セマンティックカラー**を定義しています。<br />
 * また、**Material Design 3 のトーンパレットに縛られたくない**というニーズにも対応するため、`brand-*`など、独自にlight/darkモード対応のtint/shadeも準備しています。
 *
 * 詳細は、`/src/styles/settings/_colors.scss`をご確認ください。
 * - なお、`prefers-color-scheme`に基づく**自動切り替え**を想定しています
 * - トグルボタンや`class`の付け外しなどによる明示的な**light/darkモード**の切り替えを行う場合は、適宜調整してください。
 */

export const Examples = {}
