import { generateMedia } from 'styled-media-query'


//es-lint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const tailwindConfig = preval`
  const resolveConfig               = require('tailwindcss/resolveConfig')
  const tailwindConfig              = require('../tailwind.config.js')
  const {theme}                     = resolveConfig(tailwindConfig)
  const {colors, fontSize, screens} = theme
  const options = module.exports    = {colors, fontSize, screens}
`;

export const theme = {
  ...tailwindConfig
};

export const mediaQueries = generateMedia(theme.screens)