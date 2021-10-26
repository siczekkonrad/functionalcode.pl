import { css } from 'styled-components'


const nprogress = css`
  #nprogress {
    .bar {
      background: ${({ theme }) => theme.colors.second};
    }

    .peg {
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.second},
      0 0 5px ${({ theme }) => theme.colors.second};
    }

    .spinner-icon {
      border-top-color: ${({ theme }) => theme.colors.second};
      border-bottom-color: ${({ theme }) => theme.colors.second};
    }
  }
`;