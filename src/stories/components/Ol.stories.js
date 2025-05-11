import { createOl } from './Ol';

const variants = {
	Default: {
		label: 'Ol Primary',
	},
	Alt: {
		label: 'Ol Alt',
		modifier: 'c-ol--alt',
	},
};

export default {
  title: 'Components/Ol',
  tags: ['autodocs'],
  render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createOl({ ...variantProps });
	},
	args: {
		label: 'Ol Primary',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Ol variant',
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
標準的な**Ol**コンポーネント<br />
**Show code** または \`src/styles/components/_list.scss\`をご確認ください。
- \`.c-ol\`:**Ol**コンポーネント
- \`.c-ol--alt\`:Olのmodifier
- \`.c-entry ol\`:\`.c-entry\`以下の\`ol\`はセレクタに対して自動でスタイルが割り振られる仕様です。
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

export const OlAlt = {
	args: {
		variant: 'Alt',
	}
}
