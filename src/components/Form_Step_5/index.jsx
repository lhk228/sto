import React from 'react';
import { Progress} from 'antd';
import { Container, Main, Title, Note} from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
export const array = [];
const Step5 = () => {

  
  const navigate = useNavigate()
  const onClick =()=> {
    navigate('/pricing-home');
    console.log(array.splice(0));

  }
  return (
    <Container>
      <Main>
        <Title>성공</Title>
        <Progress percent={100} showInfo={false} />
        <Note>5 / 5</Note>
        <Title>완성되었다!</Title>
          
          <Button onClick={onClick} type={'step'}>결제 페이지로 가기</Button>
      </Main>
    </Container>
  )
}

export default Step5
