import { createIcon } from './Icon';

const variants = {
  Default: {
		label: 'Icon',
		gutter: 's',
	},
	Middle: {
		label: 'Icon Middle',
		gutter: 'm',
	},
  XS: {
		label: 'Icon XS',
		gutter: 'xs',
	},
};

export default {
	title: 'Objects/Icon',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createIcon({ ...variantProps });
  },
	args: {
		label: 'Icon',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Icon gutter variant',
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
\`.o-icn\` は、テキストとアイコンのサイズを調整するためのオブジェクトです。

詳しくは、\`/src/styles/objects/_icon.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Icon = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Default Style. Gap `s`',
      },
    },
  },
}

export const IconMiddle = {
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

export const IconXS = {
	args: {
		variant: 'XS',
	},
	parameters: {
    docs: {
      description: {
        story: 'Gap `xs`',
      },
    },
  },
}
