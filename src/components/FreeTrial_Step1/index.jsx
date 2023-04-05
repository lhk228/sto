import React from 'react';
import { Container, Main, Title, Tit, Text, VideoBox,  InputTitle, Wrapper,  Section, Iconbox, Img, Box} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import sns1 from '../../assets/icons/sns1.png'
import sns2 from '../../assets/icons/sns2.png'
import sns3 from '../../assets/icons/sns3.png'
import sns4 from '../../assets/icons/sns4.png'
import sns5 from '../../assets/icons/sns5.png'
import sns6 from '../../assets/icons/sns6.png'


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
        <Section>
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
      
        </Section>
        <Section>
          <InputTitle color='#000'>문의전화</InputTitle>
          <Text>1688-9050</Text>
          <Iconbox>
            <Img src={sns1}/>
            <Img src={sns2}/>
            <Img src={sns3}/>
            <Img src={sns4}/>
            <Img src={sns5}/>
            <Img src={sns6}/>
          </Iconbox>
        </Section>
        
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
