import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        dark: {
          'text': '#edfdfd',
          'background': '#042425',
          'secondary-bg': '#031b1c',
          'primary': '#d2feff',
          'secondary': '#031b1c',
          'accent': '#16d1d4',
        },

        'text': '#042425',
        'background': '#edfdfd',
        'secondary-bg': '#cedbdb',
        'primary': '#d2feff',
        'secondary': '#bff6f8',
        'accent': '#084849',

      },
    }
  },
  plugins: [],
}
export default config
