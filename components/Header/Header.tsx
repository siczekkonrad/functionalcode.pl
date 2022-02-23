import React from 'react'
import Container from '../Container/Container';
import Navigation from '../Navigation';
import SiteLogo from '../SiteLogo';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <SiteLogo />
        <Navigation />
      </Container>
    </header>
  )
}

export default Header;