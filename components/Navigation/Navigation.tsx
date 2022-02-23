import React from 'react'
import Link from 'next/link'
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/blog" passHref>
        <a>Blog</a>
      </Link>
      <Link href="/o-mnie" passHref>
        <a>O mnie</a>
      </Link>
    </nav>
  )
}

export default Navigation;