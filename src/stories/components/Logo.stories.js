import { createLogo } from './Logo';

export default {
  title: 'Components/Logo',
  tags: ['autodocs'],
  render: () => createLogo(),
}

/**
 * 詳細は、**Show code** または `src/styles/components/_logo.scss`をご確認ください。
 * - `.c-logo`:**Logo**コンポーネント
 * - `.c-logo--*`:Logoのmodifier
 * - `.c-logo-fll`:SVGの塗り潰し部分（hoverやactiveの挙動を分けるため）
 * - `.c-logo-drw`:SVGのライン部分（hoverやactiveの挙動を分けるため）
 * - `.c-logo-ltr`:SVGのテキスト部分（hoverやactiveの挙動を分けるため）
 */
export const Examples = {}
