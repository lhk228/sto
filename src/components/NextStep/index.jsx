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
          <Tit>『CEO뉴스레터』 회원을 축하합니다!</Tit>
          <Text>약속대로, 최신 AI기술을 활용한 경제.경영.노하우 등<br /> 3분 주요뉴스를 매일 보내드립니다.</Text>
          
          <Title>당일만 드리는 특별한 제안! </Title>
          <BoxWrap>
            <TitleWrap>
              <Title>백만장자 CEO 마인드+AI방법 비밀특강!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>책10권 이상의 가치를, 비밀특강 10만(x)->1만원에 바로가기</Button>
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>CEO 비즈니스, AI·3D 자동 수익화의 비밀!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick2} type={'full'}>1강~10강 CEO 자동수익화 비밀, 250만(x)>25만원에 바로가기</Button>
              </Box>
            </TitleWrap>
          </BoxWrap>

          
          <Footer/>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
