import React from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box, TitleWrap, BoxWrap} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';
import { useNavigate } from 'react-router-dom';
import { Bottom, Top } from '../Generic/transform';

const FreeTrialStep1 = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/extend');
  }
  const onClick2 = () => {
    navigate('/success-home');
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      <Main>
          <Tit>『CEO뉴스레터』 회원을 축하합니다!</Tit>
          <Text>약속대로, 최신 AI기술을 활용한 경제·경영·노하우 등<br /> 3분 주요뉴스를 매일 영상으로 보내드립니다.</Text>
          
          <Title>회원 축하기념, 당일만 드리는 특별 혜택! </Title>
          <BoxWrap>
            <TitleWrap>
              <Title>30억 빚을 1년만에 300억 만든, CEO비밀!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>책10권 이상의 노하우 비밀특강!  『 1만원 』에 바로보기</Button>
                
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>AI영상 컨텐츠 나도 만들어보기!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick2} type={'full'}> 전문분야를 "스크립트"만 입력시, 1분당 『 1만원 』에 만들기</Button>
              
              </Box>
            </TitleWrap>
          </BoxWrap>
          <Footer/>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
