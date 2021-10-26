import React from 'react'
import Container from '../Container/Container';
import Navigation from '../Navigation';
import SiteLogo from '../SiteLogo';
import { StyledHeader } from './Header.style';

const Header: React.FC = () => {
  return (
    <StyledHeader
      className="py-10"
    >
      <Container className='flex items-center justify-between'>
        <SiteLogo />
        <Navigation />
      </Container>
    </StyledHeader>
  )
}

export default Header;