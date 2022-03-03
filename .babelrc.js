module.exports = {
  presets: ['next/babel'],
  plugins: [
    'preval',
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
};