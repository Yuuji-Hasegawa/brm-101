import { createCluster } from './Cluster';

const variants = {
  Default: {
		label: 'Cluster',
	},
	NoGap: {
		label: 'Cluster NoGap',
		size: 'none',
	},
  Small: {
		label: 'Cluster GapS',
		size: 's',
	},
  Large: {
    label: 'Cluster GapL',
		size: 'l',
	},
  ExtraSmall: {
		label: 'Cluster GapXS',
		size: 'xs',
	},
};

export default {
	title: 'Objects/Cluster',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createCluster({ ...variantProps });
  },
	args: {
		label: 'Cluster',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Cluster gutter variant',
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
\`.o-cls\` は、子要素を同じ間隔で水平方向へ並べるためのオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-cls\`:\`--cls-gtt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--cls-gtt\`:\`cluster\`内の間隔（デフォルトは16px）

詳しくは、\`/src/styles/objects/_cluster.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Cluster = {
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

export const ClusterNoGap = {
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

export const ClusterGapS = {
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

export const ClusterGapL = {
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

export const ClusterGapXS = {
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
