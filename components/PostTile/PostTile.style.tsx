import styled from 'styled-components'

export const StyledPostTile = styled.article`
  background-color: #141D2B;
  border-radius: 1.6rem;

  a {
    display: block;
    padding: 4.4rem 3.4rem;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
  }

  &:hover {
    h3 {
      color: ${({ theme }) => theme.colors.second};
    }
  }
`;