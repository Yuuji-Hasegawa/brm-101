import { createTextSize } from './TextSize';

const variants = {
	Default: {
		label: 'Paragraph',
		className: 'c-prg-l',
	},
	ParagraphSmall: {
		label: 'Paragraph Small',
		className: 'c-prg-m',
	},
	Label: {
		label: 'Label',
		className: 'c-lbl-l',
	},
	LabelSmall: {
		label: 'Label Small',
		className: 'c-lbl-m',
	},
	Small: {
		label: 'Small',
		className: 'c-sml-l',
	},
	SmallSmall: {
		label: 'Small Small',
		className: 'c-sml-m',
	},
};

export default {
	title: 'Components/Text',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createTextSize({ ...variantProps });
	},
	args: {
		label: 'Paragraph',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'TextSize variant',
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
テキストサイズを段階的に調整した**Text**コンポーネント<br />
**Show code** または \`src/styles/components/_text-sizes.scss\`をご確認ください。
- \`.c-entry p\`:\`.c-entry\`以下の\`p\`はセレクタに対して自動でスタイルが割り振られる仕様です。
      `,
      },
    },
  },
}

export const Paragraph = {
	args: {
		variant: 'Default',
	}
}

export const ParagraphSmall = {
	args: {
		variant: 'ParagraphSmall',
	}
}

export const Label = {
	args: {
		variant: 'Label',
	}
}

export const LabelSmall = {
	args: {
		variant: 'Label Small',
	}
}

export const Small = {
	args: {
		variant: 'Small',
	}
}

export const SmallSmall = {
	args: {
		variant: 'Small Small',
	}
}
