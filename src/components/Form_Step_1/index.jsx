import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top } from '../Generic/transform';
const Step1 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const onClick =()=> {
    if(value){
      navigate('/form/step-2');
      array.push(value);
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      <Main>
        <Title>다음의 간단한 질문에 답하면, 어떤 퍼널이 당신의 사업에 가장 적합한지 찾아줍니다.</Title>
        <Text>다음 중 당신의 사업은 어느 분야에 가깝습니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={25} showInfo={false} />
        <Note>1 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'에이전시/프리랜서'}>에이전시/프리랜서</Radio>
                <Radio value={'정보 제품'}>정보 제품</Radio>
                <Radio value={'전자상거래'}>전자상거래</Radio>
                <Radio value={'코칭/컨설팅'}> 코칭/컨설팅</Radio>
                <Radio value={'네트워크 마케팅'}>네트워크 마케팅</Radio>
                <Radio value={'동네 자영업'}>동네 자영업</Radio>
                <Radio value={'B2B 잠재고객 창출'}>B2B 잠재고객 창출</Radio>
                <Radio value={'블로깅/제휴 사업'}>블로깅/제휴 사업</Radio>
                <Radio value={'비영리 사업'}> 비영리 사업</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>2단계로 가기</Button>
        </Wrapper>
        <Coution>30초 설문을 마치면 클릭퍼널스 2주 무료 이용 권을 드립니다!</Coution>  
      </Main>
    </Container>
  )
}

export default Step1
