import AboutSection from 'components/AboutSection';
import Container from 'components/Container';
import Lines from 'components/Lines';
import SiteLogo from 'components/SiteLogo';
import type { NextPage } from 'next'
import MainTemplate from '../components/MainTemplate/MainTemplate';


const Home: NextPage = () => {
  return (
    <MainTemplate>
      <AboutSection />
      <Lines />
    </MainTemplate>
  )
}

export default Home
