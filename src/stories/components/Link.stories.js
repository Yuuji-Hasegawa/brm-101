import { createLink } from './Link';

const variants = {
	Default: {
		label: 'Link',
	},
	UnderLink: {
		label: 'Underline Link',
		modifier: 'c-a--und',
	},
};

export default {
	title: 'Components/Link',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createLink({ ...variantProps });
	},
	args: {
		label: 'Link',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Link variant',
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
**Link**コンポーネント<br />
**Show code** または \`src/styles/components/_link.scss\`をご確認ください。
- \`.c-a\`:**Link**コンポーネント
- \`.c-a--und\`:\`text-decoration:underline\`付きの**modifier**
- \`.c-entry a\`:\`.c-entry\`以下の\`a\`はセレクタに対して自動でスタイルが割り振られる仕様です。
      `,
      },
    },
  },
}

export const Link = {
	args: {
		variant: 'Default',
	}
}

export const UnderlineLink = {
	args: {
		variant: 'UnderLink',
	}
}
