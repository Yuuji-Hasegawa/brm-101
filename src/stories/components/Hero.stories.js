import { createHero } from './Hero';

export default {
	title: 'Components/Hero',
	tags: ['autodocs'],
	render: () => createHero(),
}

/**
 * **Hero**コンポーネント<br />
 * 詳細は、**Show code** または `src/styles/components/_mask.scss`をご確認ください。
 * - `.c-msk`:**Overlay**コンポーネント
 * - `.c-msk__src`:**Overlay**の背面（下地）になる子要素
 * - `.c-msk__surf`:**Overlay**の前面（表面）になる子要素
 */
export const Examples = {}
