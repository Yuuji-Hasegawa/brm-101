import { createStack } from './Stack';

const variants = {
  Default: {
    label: 'Stack',
  },
  Small: {
		label: 'Stack S',
		gutter: 's',
  },
  Medium: {
		label: 'Stack M',
		gutter: 'm',
  },
  Large: {
    label: 'Stack L',
		gutter: 'l',
  },
  ExtraSmall: {
		label: 'Stack XS',
		gutter: 'xs',
  },
};

export default {
	title: 'Objects/Stack',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createStack({ ...variantProps });
  },
	args: {
		label: 'Stack',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Stack gutter variant',
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
\`.o-stc\` は、子要素を同じ間隔で積み上げるためのオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-stc\`:\`--stc-mt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--stc-mt\`:子要素の間隔(margin-top)

詳しくは、\`/src/styles/objects/_stack.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Stack = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Default Style',
      },
    },
  },
}

export const Small = {
	args: {
		variant: 'Small',
	},
	parameters: {
    docs: {
      description: {
        story: 'Gap `s`',
      },
    },
  },
}

export const Medium = {
	args: {
		variant: 'Medium',
	},
	parameters: {
    docs: {
      description: {
        story: 'Gap `m`',
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
        story: 'Gap `l`',
      },
    },
  },
}

export const ExtraSmall = {
	args: {
		variant: 'ExtraSmall',
	},
	parameters: {
    docs: {
      description: {
        story: 'Gap `xs`',
      },
    },
  },
}
