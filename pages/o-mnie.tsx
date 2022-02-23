import PageHero from 'components/PageHero/PageHero';
import type { NextPage } from 'next'
import MainTemplate from '../components/MainTemplate/MainTemplate';


const About: NextPage = () => {
  return (
    <MainTemplate>
      <PageHero title="O mnie" />
    </MainTemplate>
  )
}

export default About
