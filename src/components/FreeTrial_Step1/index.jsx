import React from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';

const FreeTrialStep1 = () => {
  const onClick = () => {
    window.location.href = 'https://merisa-success.netlify.app/';
  }
  const onClick2 = () => {
    window.location.href = 'https://merisa-story.netlify.app/';
  }
  return (
    <Container>
      <Main>

          <Tit>앞서가는 3분뉴스!</Tit>
          <Text>약속대로, 매일 최신 IT뉴스를</Text>
          <Text>무료로 보내드립니다.</Text>
          <Title>AI영상 3D웹 만들기!</Title>
          <Box>
            <VideoBox>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
            </VideoBox>
            <Button onClick={onClick} type={'full'}>알아보기</Button>
          </Box>
          <Title>내 비즈니스 적용하기!</Title>

          <Box>
            <VideoBox>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
            </VideoBox>
            <Button onClick={onClick2} type={'full'}>알아보기</Button>
          </Box>
          <Footer/>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
