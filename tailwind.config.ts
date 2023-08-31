import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{tsx, jsx}',
    './src/app/**/*.{tsx, jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slate-dark-gradient" : "radial-gradient(at left top, rgb(15, 23, 50), rgb(2, 6, 23))",

      }
    }
  },
  plugins: [],
}
export default config
