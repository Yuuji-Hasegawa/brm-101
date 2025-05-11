import { createReel } from './Reel';

const variants = {
  Default: {
		label: 'Reel',
	},
	NoGap: {
		label: 'Reel NoGap',
		size: 'none',
	},
  Small: {
		label: 'Reel GapS',
		size: 's',
	},
  Large: {
    label: 'Reel GapL',
		size: 'l',
	},
  ExtraSmall: {
		label: 'Reel GapXS',
		size: 'xs',
	},
};

export default {
	title: 'Objects/Reel',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createReel({ ...variantProps });
  },
	args: {
		label: 'Reel',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Reel gutter variant',
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
\`.o-rl\` は、水平スクロールを実現するためのオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-rl\`:\`--rl-gtt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--rl-gtt\`:\`reel\`内の間隔（デフォルトは16px）

詳しくは、\`/src/styles/objects/_reel.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Reel = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Default Style. Gap `m`',
      },
    },
  },
}

export const ReelNoGap = {
	args: {
		variant: 'NoGap',
	},
	parameters: {
    docs: {
      description: {
        story: 'Gap `none`',
      },
    },
  },
}

export const ReelGapS = {
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

export const ReelGapL = {
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

export const ReelGapXS = {
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
