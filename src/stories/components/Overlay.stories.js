import { createOverlay } from './Overlay';

export default {
	title: 'Components/Overlay',
	tags: ['autodocs'],
	render: () => createOverlay(),
}

/**
 * 上下の要素を重ね合わせる**Overlay**コンポーネント<br />
 * 詳細は、**Show code** または `src/styles/components/_mask.scss`をご確認ください。
 * - `.c-msk`:**Overlay**コンポーネント
 * - `.c-msk__src`:**Overlay**の背面（下地）になる子要素
 * - `.c-msk__surf`:**Overlay**の前面（表面）になる子要素
 */
export const Examples = {}
