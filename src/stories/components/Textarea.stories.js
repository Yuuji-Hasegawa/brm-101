import { createTextarea } from './Textarea';

const variants = {
	Default: {
		label: 'Textarea Primary',
	},
	FullWidth: {
		label: 'Textarea FullWidth',
		modifier: 'u-w-max',
	},
};

export default {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createTextarea({ ...variantProps });
	},
	args: {
		label: 'Textarea Primary',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Textarea variant',
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
**Textarea**コンポーネント<br />
**Show code** または \`src/styles/components/_form.scss\`をご確認ください。
- \`.c-frm-txt\`:**Input/Textarea**コンポーネント
`,
      },
    },
  },
}

export const Default = {
	args: {
		variant: 'Default',
	}
}

export const TextareaFullWidth = {
	args: {
		variant: 'FullWidth',
	}
}
