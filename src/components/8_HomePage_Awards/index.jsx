import React from 'react';
import { Container, Img, Main, Text, Title, Up, Wrapper, } from './style';
import photo from '../../assets/imgs/groupPhoto.avif'
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
const QuestionsPage = () => {
  const navigate = useNavigate();
  const onClick =()=>{
    navigate('/pricing-home')
  }
  return (
    <Container>
      <Up>
        <Main>
          <Title>성공사례를 듣고 싶나요?</Title>
          <Text 
            color='rgba(255, 255, 255, 0.8)' 
            width='80%'
            textAlign ='center'
          >
            지금까지 ClickFunnels는 2,096명의 기업가, 소기업 소유주, 크리에이터, 교사, 코치 및 인플루언서가 퍼널에 대해 'Two Comma Club' 상을 받도록 도왔습니다!
          </Text>
          <Wrapper>
            <Img src={photo}/>
            <Img src={photo}/>
            <Img src={photo}/>
          </Wrapper>
          <Text
            color='#ffffff'
            textAlign='center'
            fontSize ='32px'
          >
              우리의 3D HW IT기반기술로 운영됩니다 지금 바로 시작 해 보세요!
          </Text>
          <Button onClick={onClick} type={'large'}>무료 시작 버튼 </Button>
          <Index color='rgba(255, 255, 255, 0.6)'>계약 없음 • 언제든지 해지 가능</Index>    
        </Main> 
      </Up>
      
    </Container>
    

  )
}

export default QuestionsPage;

