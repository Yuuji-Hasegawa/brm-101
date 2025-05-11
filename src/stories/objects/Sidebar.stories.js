import { createSidebar } from './Sidebar';

const variants = {
  Default: {
		label: 'Sidebar',
	},
	NoGap: {
		label: 'Sidebar NoGap',
		size: 'none',
	},
  Small: {
		label: 'Sidebar GapS',
		size: 's',
	},
  Medium: {
    label: 'Sidebar GapM',
		size: 'l',
	},
  ExtraSmall: {
		label: 'Sidebar GapXS',
		size: 'xs',
	},
};

export default {
	title: 'Objects/Sidebar',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createSidebar({ ...variantProps });
  },
	args: {
		label: 'Sidebar',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Sidebar gutter variant',
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
\`.o-sdb\` は、異なる幅を持つ子要素を、水平方向から垂直配置へ切り替えるレスポンシブなオブジェクトです。<br />
子要素の\`flex-grow\`や\`flex-basis\`を工夫して、お好みのスタイルを実現してください。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-sdb\`:\`--sdb-gtt\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--sdb-gtt\`:\`sidebar\`内の間隔（デフォルトは24px）

詳しくは、\`/src/styles/objects/_sidebar.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Sidebar = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Default Style. Gap `l`',
      },
    },
  },
}

export const SidebarNoGap = {
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

export const SidebarGapS = {
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

export const SidebarGapM = {
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

export const SidebarGapXS = {
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
