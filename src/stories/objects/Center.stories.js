import { createCenter } from './Center';

const variants = {
  Default: {
		label: 'Center',
	},
  Small: {
		label: 'Center S',
		size: 's',
	},
  Large: {
    label: 'Center L',
		size: 'l',
	},
  ExtraSmall: {
		label: 'Center XS',
		size: 'xs',
	},
	Clamp: {
		label: 'Center Clamp',
		size: 'clamp',
	},
};

export default {
	title: 'Objects/Center',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createCenter({ ...variantProps });
  },
	args: {
		label: 'Center',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Center padding variant',
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
\`.o-ctr\` は、ブロック要素を中央揃えするためのオブジェクトです。<br />
\`box-sizing: content-box;\`を指定しているため、\`max-width\`や\`width\`で指定した幅の外側に余白を追加し、中央揃えを実現します。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`.u-ins-ctr\`:\`--ctr-pd\`に\`var(--custom-space)\`を割り当てる
- \`.u-space-*\`:\`--custom-space\`に\`var(--s-*)\`を割り当てる
- \`--ctr-pd\`:左右に持たせる\`padding\`（外側余白。デフォルトは16px）

詳しくは、\`/src/styles/objects/_center.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Center = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Default Style. padding `m`',
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
        story: 'padding `s`',
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
        story: 'padding `l`',
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
        story: 'padding `xs`',
      },
    },
  },
}

export const Clamp = {
	args: {
		variant: 'Clamp',
	},
	parameters: {
    docs: {
      description: {
        story: 'padding `clamp`. for Content Wrapper',
      },
    },
  },
}
