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
// import {close} from './function'
// import { useNavigate } from 'react-router-dom';
import { FirstBottom, FirstTop } from '../Generic/transform';

const StoryHome = () => {
  // const navigate = useNavigate();
  // const [close, setClose] = useState(false)
  // const onClick1 = () => {
  //   setTimeout(()=>{navigate('/form/step-2')}, 420)
  //   setClose(true) 
  // }
  return (
    <Container>
      <FirstTop/>
      <FirstBottom/>
      {/* { close && <TopClose/> }
      { close && <BottomClose/> } */}
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
