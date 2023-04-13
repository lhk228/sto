import React from 'react';
import { Container } from './style';
import Intro from '../1_HomePage_Intro'
import VideoPage from '../2_HomePage_Video';
import EntrepreneursHomePage from '../3_HomePage_Entrepreneurs';
import WhyFourthPage from '../4_HomePage_Why';
import OpportunityPage from '../5_HomePage_Opportunity';
import AbilityPage from '../6_HomePage_Ability';
import PartnersPage from '../7_HomePage_Partners';
import Footer from '../Footer'
import { Bottom, Top } from '../Generic/transform';


const StoryHome = () => {
  return (
    <Container>
      <Top/>
      <Bottom/>
      <Intro/>
      <VideoPage/>
      <EntrepreneursHomePage/>
      <WhyFourthPage/>
      <OpportunityPage/>
      <AbilityPage/>
      <PartnersPage/>
      <Footer/>
    </Container>
  )
}

export default StoryHome
