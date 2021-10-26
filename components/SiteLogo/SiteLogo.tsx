import React from 'react'
import Link from 'next/link'
import { LogoIcon } from '../icons/Logo'
import styled from 'styled-components'

const StyledLogo = styled.a`
  width: 29rem;

  svg {
    width: 100%;
  }
`;

const SiteLogo = () => {
  return (
    <Link href="/" passHref>
      <StyledLogo className='flex items-center'>
        <LogoIcon />
      </StyledLogo>
    </Link >
  )
}

export default SiteLogo;