import React from 'react'
import Link from 'next/link'
import { LogoIcon } from '../icons/Logo'
import styles from './sitelogo.module.scss'

const SiteLogo = () => {
  return (
    <Link href="/" passHref>
      <a className={styles.sitelogo}>
        <LogoIcon />
      </a>
    </Link >
  )
}

export default SiteLogo;