import React from 'react';
import { Container } from './style';
import Footer from '../Footer'
import PartnerSuccessPage from '../7_HomePage_Partners_Success';
import QuestionsPage from '../8_HomePage_Awards';


const SuccessHome = () => {
  return (
    <Container>
      <PartnerSuccessPage/>
      <QuestionsPage/>
      <Footer/>
    </Container>
  )
}

export default SuccessHome
