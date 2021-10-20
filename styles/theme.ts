export const COLORS = {
  // here coors and themes definition
}

export const FONTSIZES = {
  xs: '0.75rem',
  s: '0.875rem',
  m: '1rem',
  l: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '2rem',
}

export const WEIGHTS = {
  bold: 500,
  medium: 400,
  light: 300,
}

export const BREAKPOINTS = {
  tabletsAndBigger: 550,
  laptop: 1100,
  desktop: 1500,
}

export const QUERIES = {
  tabletsAndBigger: `(min-width: ${BREAKPOINTS.tabletsAndBigger / 16}rem)`,
  laptopsAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  desktopsAndBigger: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
}

export const THEME = {
  COLORS,
  BREAKPOINTS,
  QUERIES,
  WEIGHTS,
  FONTSIZES,
}