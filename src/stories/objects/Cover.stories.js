import { createCover } from './Cover';

const variants = {
  Default: {
		label: 'Cover',
		middleClass: 'u-my-auto'
	},
	TopAuto: {
		label: 'Cover Top Auto',
		topClass: 'u-mb-auto',
	},
	BottomAuto: {
		label: 'Cover Bottom Auto',
		bottomClass: 'u-mt-auto',
	},
};

export default {
	title: 'Objects/Cover',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createCover({ ...variantProps });
  },
	args: {
		label: 'Cover',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
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
\`.o-cvr\` は、垂直方向の\`margin:auto\`を有効にするためのオブジェクトです。<br />
\`margin-top: auto;\`や\`margin-bottom:auto\`が有効になる範囲を示すための**Cover**（被膜）です。

詳しくは、\`/src/styles/objects/_cover.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Cover = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'middle `margin-top/margin-bottom` `auto`.',
      },
    },
  },
}

export const CoverTopAuto = {
	args: {
		variant: 'TopAuto',
	},
	parameters: {
    docs: {
      description: {
        story: 'Top Item `margin-bottom` `auto`.',
      },
    },
  },
}

export const CoverBottomAuto = {
	args: {
		variant: 'BottomAuto',
	},
	parameters: {
    docs: {
      description: {
        story: 'Bottom Item `margin-top` `auto`.',
      },
    },
  },
}
