import React from 'react'
import Link from 'next/link'
import { StyledNav } from './Navigation.style';

const Navigation = () => {
  return (
    <StyledNav className='ml-20'>
      <Link href="/blog" passHref>
        <a>Blog</a>
      </Link>
      <Link href="/o-mnie" passHref>
        <a>O mnie</a>
      </Link>
    </StyledNav>
  )
}

export default Navigation;