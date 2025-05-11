import { createInput } from './Input';

const variants = {
	Default: {
		label: 'Input Primary',
	},
	FullWidth: {
		label: 'Input FullWidth',
		modifier: 'u-w-max',
	},
};

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createInput({ ...variantProps });
	},
	args: {
		label: 'Input Primary',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Input variant',
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
**Input**コンポーネント<br />
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

export const InputFullWidth = {
	args: {
		variant: 'FullWidth',
	}
}
