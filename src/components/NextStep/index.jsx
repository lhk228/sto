import React from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box, TitleWrap, BoxWrap} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';
import { useNavigate } from 'react-router-dom';

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
      <Main>
          <Tit>“뉴스레터 회원 축하”</Tit>
          <Text>약속대로, 매일 최신 IT기술을 활용한 <br /> 경제.경영.노하우 등 주요뉴스를 <br /> 3분 요약하여 보내드리겠습니다.</Text>
          
          <Title>CEO를 위한, 특별 제안! </Title>
          <BoxWrap>
            <TitleWrap>
              <Title>백만장자 마인드+스킬을 공개!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>책10권 노하우를 1만원에 알기</Button>
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>내 비즈니스, IT수익화의 비밀!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick2} type={'full'}>책10권 노하우를 1만원에 알기</Button>
              </Box>
            </TitleWrap>
          </BoxWrap>

          
          <Footer/>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
