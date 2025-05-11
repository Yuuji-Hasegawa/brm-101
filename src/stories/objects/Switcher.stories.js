import { createSwitcher } from './Switcher';

const variants = {
  Default: {
		label: 'Gap L',
	},
	NoGap: {
		label: 'Switcher NoGap',
		size: 'none',
	},
  Small: {
		label: 'Switcher GapS',
		size: 's',
	},
  Medium: {
    label: 'Switcher GapL',
		size: 'm',
	},
  ExtraSmall: {
		label: 'Switcher GapXS',
		size: 'xs',
	},
};

export default {
	title: 'Objects/Switcher',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createSwitcher({ ...variantProps });
  },
	args: {
		label: 'Switcher',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Switcher gutter variant',
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
\`.o-swt\` は、同じ幅を持つ子要素を、水平方向から垂直配置へ切り替えるレスポンシブなオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-swt\`:\`--swt-gtt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--swt-gtt\`:\`switcher\`内の間隔（デフォルトは24px）

詳しくは、\`/src/styles/objects/_switcher.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Switcher = {
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

export const SwitcherNoGap = {
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

export const SwitcherGapS = {
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

export const SwitcherGapM = {
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

export const SwitcherGapXl = {
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
