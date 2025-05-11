import { createHeading } from './Heading';

const variants = {
	Default: {
		label: 'Heading 1',
		className: 'c-h1',
	},
	Level2: {
		label: 'Heading 2',
		className: 'c-h2',
	},
	Level3: {
		label: 'Heading 3',
		className: 'c-h3',
	},
	Level4: {
		label: 'Heading 4',
		className: 'c-h4',
	},
	Level5: {
		label: 'Heading 5',
		className: 'c-h5',
	},
};

export default {
	title: 'Components/Heading',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createHeading({ ...variantProps });
	},
	args: {
		label: 'Heading 1',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Heading variant',
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
**Show code** または \`src/styles/components/_text-sizes.scss\`をご確認ください。
- \`.c-h*\`:**Heading**コンポーネント
- \`.c-entry h*\`:\`.c-entry\`以下の\`h2/h3\`はセレクタに対して自動でスタイルが割り振られる仕様です。
      `,
      },
    },
  },
}

export const Heading = {
	args: {
		variant: 'Default',
	}
}

export const Heading2 = {
	args: {
		variant: 'Level2',
	}
}

export const Heading3 = {
	args: {
		variant: 'Level3',
	}
}

export const Heading4 = {
	args: {
		variant: 'Level4',
	}
}

export const Heading5 = {
	args: {
		variant: 'Level5',
	}
}
