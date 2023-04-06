import React from 'react';
import { Container, Main, SectionTop, IconBox, Icon, Text, Title,  StarWrap, SubTitle, ClientCard, ClientImg, Wrapper, ClientName, ClientType, ClientText, LogoImg, LogoTitle, LogoText } from './style';
import client1 from '../../assets/imgs/client-3-1.avif';
import client2 from '../../assets/imgs/client-3-2.avif';
import client3 from '../../assets/imgs/client-3-3.avif';
import logo from '../../assets/imgs/trustpilot.avif';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';

const EntrepreneursHomePage = () => {
  const onClick = () => {
    window.location.href = 'https://merisa-pricing.netlify.app/'
  }
  return (
    <Container>
      <Main>
        <SectionTop>
          <IconBox>
            <Icon.Template/>
            <Text>검증된 퍼널 <br /> 템플릿</Text>
          </IconBox>
          <IconBox>
            <Icon.Drag/>
            <Text>드래그 앤 <br /> 드롭 편집기</Text>
          </IconBox>
          <IconBox>
            <Icon.Cart/>
            <Text>고전확률 <br /> 체크아웃</Text>
          </IconBox>
          <IconBox>
            <Icon.Courses/>
            <Text>멤버 지역 <br /> 및 코스</Text>
          </IconBox>
          <IconBox>
            <Icon.Analytics/>
            <Text>분석 및 <br/> 인사이트</Text>
          </IconBox>
          <IconBox>
            <Icon.Testing/>
            <Text>A/B 분할 <br/> 테스트</Text>
          </IconBox>
        </SectionTop>
        <StarWrap>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
        </StarWrap>
        <Title>세계적인 기업가들이 ClickFunnels를 즐겨 사용합니다</Title>
        <SubTitle>직접 확인하세요...</SubTitle>

        <Wrapper>
          <ClientCard>
            <ClientImg src= {client1}/>
            <ClientName>Daymond John</ClientName>
            <ClientType>인증된 ClickFunnels 사용자</ClientType>
            <ClientText>"코스, 책, 라이브 이벤트, 실물 제품 등 어떤 비즈니스든 제가 지분을 가지고 있다면 반드시 퍼널이 필요합니다. 퍼널은 복잡성을 줄이고 고객이 원하는 것을 더 빠르게 얻을 수 있도록 도와주며 수익을 증가시킵니다."</ClientText>
          </ClientCard>
          <ClientCard>
            <ClientImg src= {client2}/>
            <ClientName>Tai Lopez</ClientName>
            <ClientType>Verified ClickFunnels User</ClientType>
            <ClientText>“<b>ClickFunnels helps you not only sell a product but create a movement!</b> You’ve condensed the cycle, where you can have a business up and running (fail or succeed) within 24 hours... ”</ClientText>
          </ClientCard>
          <ClientCard>
            <ClientImg src= {client3}/>
            <ClientName>Eileen Wilder</ClientName>
            <ClientType>Verified ClickFunnels User</ClientType>
            <ClientText>“I dove into the ClickFunnels software. A few months later, <b>our family made more money in 1 day than we had ever made before.</b> We cannot believe we get to not only make money, but we get to change the world doing what we loving.”</ClientText>
          </ClientCard>
        </Wrapper>
        <Button onClick={onClick} type={'large'}>지금 무료 평가판을 시작하세요 </Button>
        <Index>계약 없음 • 언제든지 해지 가능</Index>
        <LogoImg src={logo}/>
        <LogoTitle>ClickFunnels는 우수한 등급을 받았습니다.</LogoTitle>
        <LogoText>(1,835개의 리뷰를 기반으로 5점 만점에 4.7점을 받았습니다)</LogoText>
      </Main> 
    </Container>

  )
}

export default EntrepreneursHomePage;
