import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  
  a {
      display: block;
      padding: 3rem 1.6rem 2.6rem;
      font-weight:600;
      font-family: 'Asap', sans-serif;
      font-size: ${({ theme }) => theme.fontSize[8]};
      color: ${({ theme }) => theme.colors.white};
      will-change: color;
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.second};
      }
  }
`;