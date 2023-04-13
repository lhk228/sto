import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top } from '../Generic/transform';
const Step3 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const onClick =()=> {
    if(value){
      navigate('/form/step-4');
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
        <Text>사업을 시작한 지 얼마나 되었습니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={60} showInfo={false} />
        <Note>3 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'0~2년'}> 0~2년</Radio>
                <Radio value={'2~5년'}>2~5년</Radio>
                <Radio value={'5~10년'}>5~10년</Radio>
                <Radio value={'10년 이상'}> 10년 이상</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>4단계로 가기</Button>
        </Wrapper>
        <Coution>30초 설문을 마치면 클릭퍼널스 2주 무료 이용 권을 드립니다!</Coution>
      </Main>
    </Container>
  )
}

export default Step3
