import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components'
import { LinkedinIcon } from '../components/icons/Linkedin'
import { TwitterIcon } from '../components/icons/Twitter';
import { LogoIcon } from '../components/icons/Logo';
import { InstagramIcon } from '../components/icons/Instagram';


const StyledWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #0C2D48;
`;

const StyledHeading = styled.h1`
  svg {
    width: 480px;
    height: 80px;

    @media screen and (max-width: 1024px) {
      svg {
        width: 400px;
        height: 65px;
      }
    }

    @media screen and (max-width: 767px) {
      width: 283px;
    }
  }    
`;

const StyledSocials = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    li {
      margin: 0 1em;
      
      svg {
        width: 48px;
        height: 48px;
        transition: all 0.3s linear;
      }

      a {
        &:hover {
          svg {
            path { 
              fill: #fff;
            }
          }
        }
      }
    }
`;

const Home: NextPage = () => {
  return (
    <StyledWelcomeWrapper>
      <StyledHeading>
        <LogoIcon />
      </StyledHeading>
      <StyledSocials>
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
      </StyledSocials>
    </StyledWelcomeWrapper>
  )
}

export default Home
