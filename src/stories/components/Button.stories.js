import { createButton } from './Button';

const variants = {
	Default: {
		label: 'Default Button',
	},
	FilledButton: {
		label: 'Filled Button',
		className: 'c-btn--fll',
	},
	FilledSecButton: {
		label: 'Filled Secondary Button',
		className: 'c-btn--fll-sec',
	},
	FilledTerButton: {
		label: 'Filled Tertiary Button',
		className: 'c-btn--fll-ter',
	},
	FilledInvButton: {
		label: 'Filled Invert Button',
		className: 'c-btn--fll-inv',
	},
	TonalButton: {
		label: 'Tonal Button',
		className: 'c-btn--tnl',
	},
	TonalSecButton: {
		label: 'Tonal Secondary Button',
		className: 'c-btn--tnl-sec',
	},
	TonalTerButton: {
		label: 'Tonal Tertiary Button',
		className: 'c-btn--tnl-ter',
	},
	TonalGrayButton: {
		label: 'Tonal Gray Button',
		className: 'c-btn--tnl-gry',
	},
	ElevateButton: {
		label: 'Elevate Button',
		className: 'c-btn--elv',
	},
	LineButton: {
		label: 'Line Button',
		className: 'c-btn--lne',
	},
	TextButton: {
		label: 'Text Button',
		className: 'c-btn--txt',
	},
	SquareButton: {
		label: 'Square Button',
		className: 'c-btn--sq',
	},
	DisabledButton: {
		label: 'Disabled Button',
		disabled: true,
	}
};

export default {
	title: 'Components/Button',
	tags: ['autodocs'],
	render: (args) => {
		const variantProps = variants[args.variant] || {};
		return createButton({ ...variantProps });
	},
	args: {
		label: 'Default Button',
		variant: 'Default',
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Button variant',
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
**Button**コンポーネント<br />
**Show code** または \`src/styles/components/_btn.scss\`をご確認ください。
- \`.o-bx\`:**Box**オブジェクト
- \`.c-btn-*\`:**Button**コンポーネント
`,
			},
		},
	},
}

export const Default = {
	args: {
		variant: 'Default',
	}
}

export const FilledButton = {
	args: {
		variant: 'FilledButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `1` / `Primary`',
			},
		},
	},
}

export const FilledSecButton = {
	args: {
		variant: 'FilledSecButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `1` / `Secondary`',
			},
		},
	},
}

export const FilledTerButton = {
	args: {
		variant: 'FilledTerButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `1` / `Tertiary`',
			},
		},
	},
}

export const FilledInvButton = {
	args: {
		variant: 'FilledInvButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `1` / `Invert`',
			},
		},
	},
}

export const TonalButton = {
	args: {
		variant: 'TonalButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `2` / `Primary`',
			},
		},
	},
}

export const TonalSecButton = {
	args: {
		variant: 'TonalSecButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `2` / `Secondary`',
			},
		},
	},
}

export const TonalTerButton = {
	args: {
		variant: 'TonalTerButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `2` / `Tertiary`',
			},
		},
	},
}

export const TonalGrayButton = {
	args: {
		variant: 'TonalGrayButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `2` / `Monotone`',
			},
		},
	},
}

export const ElevateButton = {
	args: {
		variant: 'ElevateButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `3`',
			},
		},
	},
}

export const LineButton = {
	args: {
		variant: 'LineButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `4`',
			},
		},
	},
}

export const TextButton = {
	args: {
		variant: 'TextButton',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tier `5`',
			},
		},
	},
}

export const SquareButton = {
	args: {
		variant: 'SquareButton',
	}
}

export const DisabledButton = {
	args: {
		variant: 'DisabledButton',
	}
}
