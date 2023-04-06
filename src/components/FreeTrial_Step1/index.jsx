import React, {useState} from 'react';
import { Progress} from 'antd';
import { Container, Main, Title, Text, Note, Wrapper, Alert, Coution, Icon, CoWrap, Img } from './style';
import { Input, Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/merisa.jpg'

const FreeTrialStep1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();
  const onClick = () => {
    if (inputValue.length !== 0 && inputValue1.length !== 0) {
      navigate('/pro-monthly/step-2')
    }else{
      setDisplayText('개인정보를 다시 확인하세요!');
    }
  }
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const onChange = (event) => {
    setInputValue1(event.target.value);
  };
  return (
    <Container>
      <Img src={Logo}/>
      <Main>
        <Title>지금 14일 무료 평가판을 시작하세요!</Title>
        <Text>위험, 계약 및 장기 약정이 없습니다. 번거로움 없이 언제든지 취소하세요.</Text>
        <Progress percent={50} showInfo={false} />
        <Note>계정 만들기: 1/2단계</Note>
        <Alert>{displayText}</Alert>
        <Wrapper>
          <Input onChange={onChange} placeholder='성명'/>
          <Input onChange={handleChange} placeholder='이메일 주소'/>
          <Button onClick={onClick} type={'step'}>계속하기</Button>
        </Wrapper>
        <CoWrap>
        <Icon.Lock/> 
        <Coution>귀하의 정보를 제공함으로써 귀하는 서비스 약관 및 개인 정보 보호 정책에 따라 귀하의 정보 수집 및 사용에 동의하는 것입니다.</Coution>
        </CoWrap>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
