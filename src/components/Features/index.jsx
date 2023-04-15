import React from 'react';
import { Container, Main, Tit, Text, Img,} from './style';
import {Button} from '../Generic';
import {Index} from '../1_HomePage_Intro/style';
import Pic from '../../assets/imgs/feature-1.avif'
import { useNavigate } from 'react-router-dom';
import { FirstBottom,  FirstTop } from '../Generic/transform';


const Features = () => {
  const navigate = useNavigate();
  const onClick = ()=>{
    navigate('/form/step-1')
  } 
  return (
    <Container>
      <FirstTop/>
      <FirstBottom/>
      
      <Main>
          <Text>특징 / 세일즈 퍼널</Text>
          <Tit>온라인 방문자를 실제 구매  고객으로 전환합니다.</Tit>
          <Text>멋진 판매 퍼널을 구축하여 꿈의 고객을 온라인으로  유치하고, 리드를 생성하고, 제품을 판매하세요!</Text>
          <Button onClick={onClick} type='large'>오늘 무료 평가판을 시작하세요</Button>
          <Index>의무 사항 없음 • 언제든지 취소 가능</Index>
          <Img src={Pic}/>
      </Main>
    </Container>
  )
}

export default Features
