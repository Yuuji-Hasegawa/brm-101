import { createMedia } from './Media';

const variants = {
	Default: {},
	NoGap: {
		size: 'none',
	},
	Small: {
		size: 's',
	},
	Middle: {
		size: 'm',
	},
	ExtraSmall: {
		size: 'xs',
	},
};

export default {
	title: 'Components/Media',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createMedia({ ...variantProps });
	},
	args: {
		label: 'Media',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Media gutter variant',
		},
		label: {
			table: {
				disable: true,
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: `
画像とテキストを水平方向に配置した横長のコンポーネント<br />
**Show code** または \`src/styles/components/_row.scss\`をご確認ください。
- \`.c-mda\`:**Media**コンポーネント
- \`.c-mda__img\`:画像部分の子要素
- \`.c-mda__txt\`:テキスト部分の子要素
- \`--row-narrow\`:画像側の横幅を調整するカスタムプロパティ
			`,
			},
		},
	},
}

export const Default = {
	args: {
		variant: 'Default',
	},
}

export const None = {
	args: {
		variant: 'NoGap',
	},
	parameters: {
		docs: {
			description: {
				story: 'Gap `none`',
			},
		},
	},
}

export const Small = {
	args: {
		variant: 'Small',
	},
	parameters: {
		docs: {
			description: {
				story: 'Gap `s`',
			},
		},
	},
}

export const Middle = {
	args: {
		variant: 'Middle',
	},
	parameters: {
		docs: {
			description: {
				story: 'Gap `m`',
			},
		},
	},
}

export const XS = {
	args: {
		variant: 'ExtraSmall',
	},
	parameters: {
		docs: {
			description: {
				story: 'Gap `xs`',
			},
		},
	},
}
