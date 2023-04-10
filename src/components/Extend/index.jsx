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
          <Tit>백만장자 CEO 마인드 + AI방법 비밀특강!</Tit>
          <Text>책10권 가치의 핵심노하우를 특강 2시간만에 익히기</Text>
          <BoxWrap>
            <TitleWrap>
              <Title>30억 빚에서 1년만에 300억 회사로 만든 <br>
              </br>『이상민 CEO』의 비밀 노하우 특강</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>책10권의 가치를, 단1만원 결제 후 바로보기</Button>
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>76만 유튜버 + 의사 + 명강사 이동환TV <br>
              </br>『이동환CEO』의 비밀 노하우 특강</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick2} type={'full'}>책10권의 가치를, 단1만원 결제 후 바로보기</Button>
              </Box>
            </TitleWrap>
          </BoxWrap>

          
          <Footer/>
      </Main>
    </Container>
  )
}

export default Extend;
