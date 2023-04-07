import React from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box, TitleWrap, BoxWrap} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';
import { useNavigate } from 'react-router-dom';

const Extend = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/success-home');
  }
  const onClick2 = () => {
    navigate('/story-home');
  }
  return (
    <Container>
      <Main>
          <Tit>“백만장자 마인드+스킬 특강”</Tit>
          <Text>76만유튜버+의사+명강사의 인드.바디.멘탈 노하우 특강</Text>
          <BoxWrap>
            <TitleWrap>
              <Title>30억 빚에서 300억 회사로 1년만에 만든 CEO의 비밀 노하우 특강</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>자세히 알아보기</Button>
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>10권 책 이상의 가치를, 단 1만원 1시간 특강으로! 지금 바로 노하우 훔쳐가기</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick2} type={'full'}>자세히 알아보기</Button>
              </Box>
            </TitleWrap>
          </BoxWrap>

          
          <Footer/>
      </Main>
    </Container>
  )
}

export default Extend;
