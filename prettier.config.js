// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999
      }
    }
  ],
  tailwindConfig: './web/config/tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss']
}
