import { createCard } from './Card';

const variants = {
	Default: {},
	Small: {
		modifier: 'u-brd-r-s',
	},
	Middle: {
		modifier: 'u-brd-r-m',
	},
	Large: {
		modifier: 'u-brd-r-l',
	},
};

export default {
	title: 'Components/Card',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createCard({ ...variantProps });
	},
	args: {
		label: 'Card',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Card variant',
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
カード型レイアウト向けコンポーネント<br />
**Show code** または \`src/styles/components/_card.scss\`をご確認ください。
- \`.c-crd\`:**Card**コンポーネント
- \`.c-crd--link\`:リンク風のスタイルを追加するModifier
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

export const Small = {
	args: {
		variant: 'Small',
	},
	parameters: {
		docs: {
			description: {
				story: 'borderRadius `s`',
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
				story: 'borderRadius `m`',
			},
		},
	},
}

export const Large = {
	args: {
		variant: 'Large',
	},
	parameters: {
		docs: {
			description: {
				story: 'borderRadius `l`',
			},
		},
	},
}
