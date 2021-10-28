import styled from 'styled-components'

const StyledPageHero = styled.div`
  padding: 9rem 0;
  margin-bottom: 6rem;
`;

const StyledPageTitle = styled.h1`
  color:#FEE577;
  font-size: 7rem;
`;

const PageHero = (props: any) => (
  <StyledPageHero className='text-center'>
    <StyledPageTitle>{props.title}</StyledPageTitle>
  </StyledPageHero>
)

export default PageHero 