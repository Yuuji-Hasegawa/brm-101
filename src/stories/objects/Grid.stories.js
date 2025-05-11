import { createGrid } from './Grid';

const variants = {
  Default: {
		label: 'Grid',
		className: 'o-grd--t'
	},
	Quart: {
		label: 'Grid Quart',
		className: 'o-grd--q'
	},
  Small: {
		label: 'Grid GapS',
		size: 's',
		className: 'o-grd--t',
	},
  Medium: {
    label: 'Grid GapM',
		size: 'm',
		className: 'o-grd--t',
	},
  ExtraSmall: {
		label: 'Grid GapXS',
		size: 'xs',
		className: 'o-grd--t',
	},
	NoGap: {
		label: 'Grid NoGap',
		size: 'none',
		className: 'o-grd--t',
	},
};

export default {
	title: 'Objects/Grid',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createGrid({ ...variantProps });
  },
	args: {
		label: 'Stack',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Grid gutter variant',
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
\`.o-grd\` は、子要素を同じ幅で規則的に並べるオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-grd\`:\`--grd-gtt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--grd-gtt\`:\`grid\`内の間隔（デフォルトは24px）
- \`.o-grd--*\`:グリッドのカラム数。\`t\`（tri：3列）や \`q\`（quart：4列）を実装済み

詳しくは、\`/src/styles/objects/_grid.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Grid = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Grid with gap `l` and modifier `o-grd--t` (3 columns)',
      },
    },
  },
}

export const GridQuart = {
	args: {
		variant: 'Quart',
	},
	parameters: {
    docs: {
      description: {
        story: 'Grid with gap `l` and modifier `o-grd--q` (4 columns)',
      },
    },
  },
}

export const GridGapS = {
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

export const GridGapM = {
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

export const GridGapXS = {
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

export const GridNoGap = {
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
