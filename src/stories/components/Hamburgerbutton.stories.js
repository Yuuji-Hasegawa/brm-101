import { fn } from '@storybook/test'

import { createHamburgerButton } from './Hamburgerbutton';

export default {
	title: 'Components/HamburgerButton',
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return createHamburgerButton({ ...args })
	},
	argTypes: {
    onClick: { action: 'onClick' },
    ariaExpanded: { control: 'boolean' },
	},
	args: { onClick: fn() },
}

/**
 * `aria-expanded`で表示切り替え<br />
 * **Show code** または \`src/styles/components/_btn.scss\`をご確認ください。
 * - `.c-btn-*`:**Button**コンポーネント
 * - `.c-hbg-bars`:HamburgerButtonの子要素
 */

export const Examples = {}
