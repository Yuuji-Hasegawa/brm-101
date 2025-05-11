import { createBox } from './Box';

const variants = {
  Default: {
    label: 'Box',
  },
  Ghost: {
    label: 'GhostBox',
    borderColor: 'var(--c-brd-ghost)',
    textColor: 'var(--c-placeholder)',
  },
  Filled: {
    label: 'FilledBox',
    borderColor: 'transparent',
    bgColor: 'var(--c-fill)',
    textColor: 'var(--c-txt-on-fill)',
  },
  Bold: {
    label: 'BoldBox',
    borderWidth: '2px',
  },
  Outline: {
    label: 'HasOutLineBox',
    borderColor: 'transparent',
    outlineColor: 'var(--c-fill)',
  },
};

export default {
	title: 'Objects/Box',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createBox({ ...variantProps });
  },
	args: {
		label: 'Box',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Box style variant',
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
\`.o-bx\` は、背景とボーダーを持つ汎用ボックスです。

以下のカスタムプロパティを使って、柔軟にスタイルを調整できます：

- \`--bx-txt-clr\`:テキストカラー
- \`--bx-bg-clr\`:背景色
- \`--bx-brd-w\`:ボーダーの太さ
- \`--bx-brd-clr\`:ボーダーの色
- \`--bx-otl-clr\`:アウトラインの色

詳しくは、\`/src/styles/objects/_box.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Box = {
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

export const GhostBox = {
	args: {
		variant: 'Ghost',
	},
	parameters: {
    docs: {
      description: {
        story: 'Dimmed Style',
      },
    },
  },
}

export const FilledBox = {
	args: {
		variant: 'Filled',
	},
	parameters: {
    docs: {
      description: {
        story: 'Filled Style',
      },
    },
  },
}

export const BoldBox = {
	args: {
		variant: 'Bold',
	},
	parameters: {
    docs: {
      description: {
        story: 'Bold Style',
      },
    },
  },
}

export const HasOutLineBox = {
	args: {
		variant: 'Outline',
	},
	parameters: {
    docs: {
      description: {
        story: 'Visible colored outline',
      },
    },
  },
}
