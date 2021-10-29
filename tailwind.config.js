module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: '#348CBE',
      second: '#FEE577',
      dark: '#0d1d3a',
      bg: '#182b48',
      navLink: 'rgba(174,221,255,.6)',
      white: '#fff',
      postTile: 'rgba(255,255,255,.1)',
    },
    fontSize: {
      1: '0.8rem',
      2: '1rem',
      3: '1.2rem',
      4: '1.4rem',
      5: '1.6rem',
      6: '1.8rem',
      7: '2rem',
      8: '2.2rem',
      9: '2.4rem',
      10: '2.6rem',
      11: '2.8rem',
      12: '3rem',
      13: '3.2rem',
      14: '3.4rem',
      15: '3.6rem',
      16: '3.8rem',
      17: '4rem',
      18: '4.2rem',
      19: '4.4rem',
      20: '4.6rem',
      21: '4.8rem',
      22: '5rem',
      60: '6rem',
      70: '7rem',
      80: '8rem'
    },
    screens: {
      xs: '375px',
      sm: '500px',
      md: '767px',
      lg: '993px',
      xlg: '1024px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '1680px',

    },
    extend: {
      spacing: {
        10: '1rem',
        20: '2rem',
        30: '3rem',
        40: '4rem',
        50: '5rem',
        60: '6rem',
        70: '7rem'
      },
      borderRadius: {
        4: '0.4rem',
        8: '0.8rem',
        32: '3.2rem',
        100: '9999rem',
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}