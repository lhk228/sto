import React from 'react';
import { Container, Main, SectionTop, IconBox, Icon, Text, Title,  StarWrap, SubTitle, ClientCard, ClientImg, Wrapper, ClientName, ClientType, ClientText, LogoImg, LogoTitle, LogoText } from './style';
import client1 from '../../assets/imgs/client-3-1.avif';
import client2 from '../../assets/imgs/client-3-2.avif';
import client3 from '../../assets/imgs/client-3-3.avif';
import logo from '../../assets/imgs/trustpilot.avif';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';

const EntrepreneursHomePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/pricing-home')
  }
  return (
    <Container>
      <Main>
        <SectionTop>
          <IconBox>
            <Icon.Template/>
            <Text>검증된 3D홈페이지 <br /> 3D웹페이지</Text>
          </IconBox>
          <IconBox>
            <Icon.Drag/>
            <Text>AI 자동 <br /> 영상 편집기</Text>
          </IconBox>
          <IconBox>
            <Icon.Cart/>
            <Text>유입율 <br /> 전환율 확인</Text>
          </IconBox>
          <IconBox>
            <Icon.Courses/>
            <Text>CEO 지역별 <br /> 교육과정 및 도전</Text>
          </IconBox>
          <IconBox>
            <Icon.Analytics/>
            <Text>AI데이터 분석<br/>및 인사이트</Text>
          </IconBox>
          <IconBox>
            <Icon.Testing/>
            <Text>업종별 리딩 <br/> 경쟁사 압도</Text>
          </IconBox>
        </SectionTop>
        <StarWrap>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
        </StarWrap>
        <Title>성공하는 CEO들이 메버 3D를 사용합니다</Title>
        <SubTitle>직접 검증하세요...</SubTitle>

        <Wrapper>
          <ClientCard>
            <ClientImg src= {client1}/>
            <ClientName>건설회사 엘림(주)CEO</ClientName>
            <ClientType>1.10.100도전 사용자</ClientType>
            <ClientText>"코스, 책, 라이브 이벤트, 실물 제품 등 어떤 비즈니스든 제가 지분을 가지고 있다면 반드시 퍼널이 필요합니다. 퍼널은 복잡성을 줄이고 고객이 원하는 것을 더 빠르게 얻을 수 있도록 도와주며 수익을 증가시킵니다."</ClientText>
          </ClientCard>
          <ClientCard>
            <ClientImg src= {client2}/>
            <ClientName>메리사 CEO</ClientName>
            <ClientType>3D CEO교육 사용자</ClientType>
            <ClientText>“<b>ClickFunnels helps you not only sell a product but create a movement!</b> You’ve condensed the cycle, where you can have a business up and running (fail or succeed) within 24 hours... ”</ClientText>
          </ClientCard>
          <ClientCard>
            <ClientImg src= {client3}/>
            <ClientName>강남지인병원 CEO</ClientName>
            <ClientType>3D홈페이지.3D마케팅 사용자</ClientType>
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
