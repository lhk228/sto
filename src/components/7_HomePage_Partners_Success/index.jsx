import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import {  Container, Down, Main, Name, Note, Position, SupTitle, Title, VideoBox, VideoContainer, VideoWrap, } from './style';

import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
const PartnersPage = () => {
  const navigate = useNavigate();
  const onClick =()=> {
    navigate('/pricing-home');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      
      <Down>
        <Main>
          <Title>성공사례를 듣고 싶나요?</Title>
          <SupTitle>여기 있습니다...</SupTitle>
          <VideoContainer>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[3D마케팅 SW 성공사례]</Name>
              <Position>B2B</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[3D마케팅 SW 성공사례2]</Name>
              <Position>전자상거래</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[3D마케팅 SW 성공사례3]</Name>
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
          <Note>우리의 3D마케팅은 SW IT기반기술로 운영됩니다 지금 바로 시작 해 보세요.</Note>
          <Button onClick={onClick} type={'large'}>무료 시작 버튼 </Button>
          <Index>계약 없음 • 언제든지 해지 가능</Index>
        </Main> 
      </Down>
      
    </Container>
    

  )
}

export default PartnersPage;

