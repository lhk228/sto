import React from 'react';
import { BrandWrap, Container, Icon, Main, UpTitle } from './style';

const PartnersPage = () => {
  return (
    <Container>
        <Main>
          <UpTitle>최고의 브랜드가 신뢰하는</UpTitle>
          <BrandWrap>
            <Icon.Tony/>
            <Icon.Master/>
            <Icon.Lady/>
            <Icon.Camping/>
          </BrandWrap>
        </Main> 
    </Container>
    

  )
}

export default PartnersPage;

