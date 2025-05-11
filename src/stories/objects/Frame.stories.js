import { createFrame } from './Frame';

const variants = {
  Default: {
		label: 'Frame',
	},
  Square: {
		label: 'Square Frame',
		size: 'sq',
	},
  Small: {
    label: 'Small Frame',
		size: 's',
	},
  Middle: {
		label: 'Middle Frame',
		size: 'm',
	},
	PortraitSmall: {
		label: 'Portrait Small Frame',
		size: 'ys',
	},
	PortraitMiddle: {
		label: 'Portrait Middle Frame',
		size: 'ym',
	},
	PortraitLarge: {
		label: 'Portrait Large Frame',
		size: 'yl',
	},
	Paper: {
		label: 'Paper Frame',
		size: 'ppr'
	},
	PortraitPaper: {
		label: 'Portrait Paper Frame',
		size: 'yppr'
	},
	LandscapeBronze: {
		label: 'Landscape Bronze Frame',
		size: 'brz'
	},
	PortraitBronze: {
		label: 'Portrait Bronze Frame',
		size: 'ybrz'
	},
	LandscapeBanner: {
		label: 'Landscape Banner Frame',
		size: 'xbnr'
	},
	PortraitBanner: {
		label: 'Portrait Banner Frame',
		size: 'ybnr'
	},
	FullBanner: {
		label: 'FullBanner Frame',
		size: 'fbnr'
	},
	HalfBanner: {
		label: 'Half Banner Frame',
		size: 'hbnr'
	},
	RectBanner: {
		label: 'RectBanner Frame',
		size: 'rbnr'
	},
	WideSkyscraperBanner: {
		label: 'WideSkyscraper Banner Frame',
		size: 'wsbnr'
	},
	RoundCornerSFrame: {
		label: 'Round Corner S Frame',
		round: 's',
	},
	RoundCornerMFrame: {
		label: 'Round Corner M Frame',
		round: 'm',
	},
	RoundCornerLFrame: {
		label: 'Round Corner L Frame',
		round: 'l',
	},
	RoundFrame: {
		label: 'Round Frame',
		size: 'sq',
		round: 'r',
	},
};

export default {
	title: 'Objects/Frame',
	tags: ['autodocs'],
	render: (args) => {
    const variantProps = variants[args.variant] || {};
    return createFrame({ ...variantProps });
  },
	args: {
		label: 'Frame',
    variant: 'Default',
	},
	argTypes: {
    variant: {
      control: { type: 'select' },
			options: Object.keys(variants),
			description: 'Frame AspectRatio variant',
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
\`.o-frm\` は、指定したアスペクト比に合わせて子要素をクロップ（切り抜き）するオブジェクトです。

以下のユーティリティヘルパーを組み合わせることで、スタイルの調整が可能です：

- \`--frm-asp\`:\`frame\`のアスペクト比（デフォルトは16:9）
- \`--frm-r\`:\`frame\`内のborder-radius
- \`.u-asp-*\`:\`--frm-asp\`に指定のaspect-ratioを割り当てる
- \`.u-frm-*\`:\`--frm-r\`に指定のborder-radiusを割り当てる

詳しくは、\`/src/styles/objects/_frame.scss\` をご確認ください。
      `,
      },
    },
  },
}

export const Frame = {
	args: {
		variant: 'Default',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `16:9`',
      },
    },
  },
}

export const SquareFrame = {
	args: {
		variant: 'Square',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `1:1`',
      },
    },
  },
}

export const SmallFrame = {
	args: {
		variant: 'Small',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `3:2`',
      },
    },
  },
}

export const MiddleFrame = {
	args: {
		variant: 'Middle',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `4:3`',
      },
    },
  },
}

export const PortraitSmallFrame = {
	args: {
		variant: 'PortraitSmall',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `2:3`',
      },
    },
  },
}

export const PortraitMiddleFrame = {
	args: {
		variant: 'PortraitMiddle',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `3:4`',
      },
    },
  },
}

export const PortraitLargeFrame = {
	args: {
		variant: 'PortraitLarge',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `9:16`',
      },
    },
  },
}

export const PaperFrame = {
	args: {
		variant: 'Paper',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `√2:1`',
      },
    },
  },
}

export const PortraitPaperFrame = {
	args: {
		variant: 'PortraitPaper',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `1:√2`',
      },
    },
  },
}

export const LandscapeBronzeFrame = {
	args: {
		variant: 'LandscapeBronze',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `(3+√13)/2:1`',
      },
    },
  },
}

export const PortraitBronzeFrame = {
	args: {
		variant: 'PortraitBronze',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `1:(3+√13)/2`',
      },
    },
  },
}

export const LandscapeBannerFrame = {
	args: {
		variant: 'LandscapeBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `8:1`',
      },
    },
  },
}

export const PortraitBannerFrame = {
	args: {
		variant: 'PortraitBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `1:2`',
      },
    },
  },
}

export const FullBannerFrame = {
	args: {
		variant: 'FullBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `39:5`',
      },
    },
  },
}

export const HalfBannerFrame = {
	args: {
		variant: 'HalfBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `39:10`',
      },
    },
  },
}

export const RectBannerFrame = {
	args: {
		variant: 'RectBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `6:5`',
      },
    },
  },
}

export const WideSkyscraperBannerFrame = {
	args: {
		variant: 'WideSkyscraperBanner',
	},
	parameters: {
    docs: {
      description: {
        story: 'Aspect ratio `4:15`',
      },
    },
  },
}

export const RoundCornerSFrame = {
	args: {
		variant: 'RoundCornerSFrame',
	},
	parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 8px * 1 / 1.618 (≈4.94px)',
      },
    },
  },
}

export const RoundCornerMFrame = {
	args: {
		variant: 'RoundCornerMFrame',
	},
	parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 8px.',
      },
    },
  },
}

export const RoundCornerLFrame = {
	args: {
		variant: 'RoundCornerLFrame',
	},
	parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 16px.',
      },
    },
  },
}

export const RoundFrame = {
	args: {
		variant: 'RoundFrame',
	},
	parameters: {
    docs: {
      description: {
        story: 'All corners rounded to 50%.',
      },
    },
  },
}
