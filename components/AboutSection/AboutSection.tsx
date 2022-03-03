import Container from "components/Container"
import SiteLogo from "components/SiteLogo"
import React from "react"
import profileImg from '../../public/images/konrad_www.png'
import styles from './AboutSection.module.scss'
import Link from "next/link"
import { LinkedinIcon } from "components/icons/Linkedin"
import { TwitterIcon } from "components/icons/Twitter"
import { InstagramIcon } from "components/icons/Instagram"
const AboutSection = () => {
    return (
        <div className={styles.AboutSection}>
            <Container>
                <SiteLogo />
                <div className={styles.infoWrapper}>
                    <div className={styles.image}><img src={profileImg.src} alt="konrad" /></div>
                    <div className={styles.data}>
                        <h2>Czym się zajmuję?</h2>
                        <div className={styles.pills}>
                            <div className={styles.pill}>React</div>
                            <div className={styles.pill}>NextJS</div>
                            <div className={styles.pill}>JavaScript</div>
                            <div className={styles.pill}>Wordpress</div>
                            <div className={styles.pill}>CSS</div>
                            <div className={styles.pill}>HTML</div>
                            <div className={styles.pill}>Szkolenia</div>
                            <div className={styles.pill}>Blogowanie</div>
                        </div>
                        <h2>Gdzie mnie znajdziesz?</h2>
                        <ul className={styles.links}>
                            <li>
                                <Link href={`https://www.linkedin.com/in/konradsiczek`} passHref>
                                    <a>
                                        <LinkedinIcon />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://twitter.com/fncodepl`} passHref>
                                    <a>
                                        <TwitterIcon />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://www.instagram.com/functionalcode`} passHref>
                                    <a>
                                        <InstagramIcon />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default AboutSection