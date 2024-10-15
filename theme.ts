import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #0FBA81
		'--color-primary-50': '219 245 236', // #dbf5ec
		'--color-primary-100': '207 241 230', // #cff1e6
		'--color-primary-200': '195 238 224', // #c3eee0
		'--color-primary-300': '159 227 205', // #9fe3cd
		'--color-primary-400': '87 207 167', // #57cfa7
		'--color-primary-500': '15 186 129', // #0FBA81
		'--color-primary-600': '14 167 116', // #0ea774
		'--color-primary-700': '11 140 97', // #0b8c61
		'--color-primary-800': '9 112 77', // #09704d
		'--color-primary-900': '7 91 63', // #075b3f
		// secondary | #05A067
		'--color-secondary-50': '218 241 232', // #daf1e8
		'--color-secondary-100': '205 236 225', // #cdece1
		'--color-secondary-200': '193 231 217', // #c1e7d9
		'--color-secondary-300': '155 217 194', // #9bd9c2
		'--color-secondary-400': '80 189 149', // #50bd95
		'--color-secondary-500': '5 160 103', // #05A067
		'--color-secondary-600': '5 144 93', // #05905d
		'--color-secondary-700': '4 120 77', // #04784d
		'--color-secondary-800': '3 96 62', // #03603e
		'--color-secondary-900': '2 78 50', // #024e32
		// tertiary | #02CFA2
		'--color-tertiary-50': '217 248 241', // #d9f8f1
		'--color-tertiary-100': '204 245 236', // #ccf5ec
		'--color-tertiary-200': '192 243 232', // #c0f3e8
		'--color-tertiary-300': '154 236 218', // #9aecda
		'--color-tertiary-400': '78 221 190', // #4eddbe
		'--color-tertiary-500': '2 207 162', // #02CFA2
		'--color-tertiary-600': '2 186 146', // #02ba92
		'--color-tertiary-700': '2 155 122', // #029b7a
		'--color-tertiary-800': '1 124 97', // #017c61
		'--color-tertiary-900': '1 101 79', // #01654f
		// success | #4CAF50
		'--color-success-50': '228 243 229', // #e4f3e5
		'--color-success-100': '219 239 220', // #dbefdc
		'--color-success-200': '210 235 211', // #d2ebd3
		'--color-success-300': '183 223 185', // #b7dfb9
		'--color-success-400': '130 199 133', // #82c785
		'--color-success-500': '76 175 80', // #4CAF50
		'--color-success-600': '68 158 72', // #449e48
		'--color-success-700': '57 131 60', // #39833c
		'--color-success-800': '46 105 48', // #2e6930
		'--color-success-900': '37 86 39', // #255627
		// warning | #FFC107
		'--color-warning-50': '255 246 218', // #fff6da
		'--color-warning-100': '255 243 205', // #fff3cd
		'--color-warning-200': '255 240 193', // #fff0c1
		'--color-warning-300': '255 230 156', // #ffe69c
		'--color-warning-400': '255 212 81', // #ffd451
		'--color-warning-500': '255 193 7', // #FFC107
		'--color-warning-600': '230 174 6', // #e6ae06
		'--color-warning-700': '191 145 5', // #bf9105
		'--color-warning-800': '153 116 4', // #997404
		'--color-warning-900': '125 95 3', // #7d5f03
		// error | #F44336
		'--color-error-50': '253 227 225', // #fde3e1
		'--color-error-100': '253 217 215', // #fdd9d7
		'--color-error-200': '252 208 205', // #fcd0cd
		'--color-error-300': '251 180 175', // #fbb4af
		'--color-error-400': '247 123 114', // #f77b72
		'--color-error-500': '244 67 54', // #F44336
		'--color-error-600': '220 60 49', // #dc3c31
		'--color-error-700': '183 50 41', // #b73229
		'--color-error-800': '146 40 32', // #922820
		'--color-error-900': '120 33 26', // #78211a
		// surface | #F5F5F5
		'--color-surface-50': '254 254 254', // #fefefe
		'--color-surface-100': '253 253 253', // #fdfdfd
		'--color-surface-200': '253 253 253', // #fdfdfd
		'--color-surface-300': '251 251 251', // #fbfbfb
		'--color-surface-400': '248 248 248', // #f8f8f8
		'--color-surface-500': '245 245 245', // #F5F5F5
		'--color-surface-600': '221 221 221', // #dddddd
		'--color-surface-700': '184 184 184', // #b8b8b8
		'--color-surface-800': '147 147 147', // #939393
		'--color-surface-900': '120 120 120' // #787878
	}
};
