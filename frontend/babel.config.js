module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-typescript"
  ],
  plugins:[
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-sticky-regex",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}
