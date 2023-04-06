import React from 'react';
import { Container, Img, Main, Text, Title, Up, Wrapper, } from './style';
import photo from '../../assets/imgs/groupPhoto.avif'
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
const QuestionsPage = () => {
  const onClick =()=>{
    window.location.href = 'https://merisa-pricing.netlify.app/'
  }
  return (
    <Container>
      <Up>
        <Main>
          <Title color='#1CBCFF'>다음 'Two Comma Club' 수상자가 될 수 있습니까?</Title>
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
              당신은 다음이 될 것인가? 오늘 ClickFunnels를 무료로 시작하세요!
          </Text>
          <Button onClick={onClick} type={'large'}>오늘 무료 평가판을 시작하세요</Button>
          <Index color='rgba(255, 255, 255, 0.6)'>계약 없음 • 언제든지 해지 가능</Index>    
        </Main> 
      </Up>
      
    </Container>
    

  )
}

export default QuestionsPage;

