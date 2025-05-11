import { createGmap } from './Gmap';

const variants = {
	Default: {},
	GrayFilter: {
		modifier: 'u-flt-gry',
	},
	IoLazy: {
		lazy: true,
	},
};

export default {
	title: 'Components/Gmap',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createGmap({ ...variantProps });
	},
	args: {
		label: 'Gmap',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Gmap variant',
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
Google Map向けに調整したコンポーネント<br />
**Show code**をご確認ください。
- \`.o-frm\`:**Frame**オブジェクト
- \`.u-flt-gry\`:子要素をグレースケール化するユーティリティ
- \`.j-io-lzy\`:**IntersectionObserver**による遅延読み込みを実現するためのユーティリティ
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

export const GrayFilter = {
	args: {
		variant: 'GrayFilter',
	}
}

export const IoLazy = {
	args: {
		variant: 'IoLazy',
	}
}
