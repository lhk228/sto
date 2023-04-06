import React from 'react';
import ReactPlayer from 'react-player';
import {  Container, Down, Main, Name, Note, Position, SupTitle, Title, VideoBox, VideoContainer, VideoWrap, } from './style';

import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
const PartnersPage = () => {
  const onClick =()=> {
    window.location.href = 'https://merisa-pricing.netlify.app/'
  }
  return (
    <Container>
      
      <Down>
        <Main>
          <Title>자신과 같은 기업가들이 ClickFunnels에 대해 말하는 것을 듣고 싶습니까?</Title>
          <SupTitle>여기 있습니다...</SupTitle>
          <VideoContainer>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>B2B</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>전자상거래</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>코칭/컨설팅</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>B2B</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>전자상거래</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>이름</Name>
              <Position>네트워크 마케팅</Position>
            </VideoBox>
          </VideoContainer>
          <Note>**표시된 평가는 ClickFunnels 유료 사용자의 실제 경험입니다. 그들의 결과는 일반적이지 않으며 귀하의 경험은 귀하의 노력, 교육, 비즈니스 모델 및 우리가 통제할 수 없는 시장 세력에 따라 달라질 것입니다. ClickFunnels는 비즈니스 기회가 아닙니다. ClickFunnels는 기업이 제품과 서비스를 온라인으로 판매할 수 있도록 도와주는 웹사이트 및 퍼널 빌더입니다. 우리는 수입 청구 또는 투자 수익 청구를 하지 않으며 귀하는 돈을 돌려받지 못할 수도 있습니다.**</Note>
          <Button onClick={onClick} type={'large'}>오늘 무료 평가판을 시작하세요</Button>
          <Index>계약 없음 • 언제든지 해지 가능</Index>
        </Main> 
      </Down>
      
    </Container>
    

  )
}

export default PartnersPage;

