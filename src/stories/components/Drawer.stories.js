import { fn } from '@storybook/test'

import { createDrawer } from './Drawer';

export default {
	title: 'Components/Drawer',
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return createDrawer({ ...args })
	},
	argTypes: {
    onClick: { action: 'onClick' },
  },
	args: { onClick: fn() },
}

/**
 * `dialog`を用いた**Drawer**コンポーネント<br />
 * **Show code** または \`src/styles/components/_menu.scss\`をご確認ください。
 * - `.j-menu`:**Drawer**コンポーネント
 * - `.c-menu-bg`:**Drawer**背景コンポーネント
 */

export const Examples = {}
