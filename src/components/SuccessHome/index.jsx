import React, {useEffect} from 'react';
import { Container } from './style';
import Footer from '../Footer'
import PartnerSuccessPage from '../7_HomePage_Partners_Success';
import QuestionsPage from '../8_HomePage_Awards';
import { Bottom, Top } from '../Generic/transform';


const SuccessHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Top/>
      <Bottom/>
      <PartnerSuccessPage/>
      <QuestionsPage/>
      <Footer/>
    </Container>
  )
}

export default SuccessHome
