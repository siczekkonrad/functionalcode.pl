import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components'
import { LinkedinIcon } from '../components/icons/Linkedin'
import { TwitterIcon } from '../components/icons/Twitter';


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
    font-size: 8em;
    color: #2E8BC0;

    @media screen and (max-width: 1024px) {
      font-size: 4em;
    }

    @media screen and (max-width: 767px) {
      font-size: 2em;
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
      }
    }
`;

const Home: NextPage = () => {
  return (
    <StyledWelcomeWrapper>
      <StyledHeading>functionalCode.pl</StyledHeading>
      <StyledSocials>
        <li>
          <Link href={`https://www.linkedin.com/in/konradsiczek/`} passHref>
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
      </StyledSocials>
    </StyledWelcomeWrapper>
  )
}

export default Home
