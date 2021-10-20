module.exports = {
  presets: ['next/babel'],
  plugins: [
    'preval',
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ]
};