import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top } from '../Generic/transform';
const Step2 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const onClick =()=> {
    if(value){
      navigate('/form/step-3');
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
        <Text>클릭퍼널스에 대해 어느 퍼널로 알게 되었습니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={40} showInfo={false} />
        <Note>2 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'토리 로빈슨'}>토리 로빈슨</Radio>
                <Radio value={'CNBC 방송'}>CNBC 방송</Radio>
                <Radio value={'글 《포브스》, 《Inc.》, 《앙트프러너 Enterpreneur》, 《허핑턴 포스트》'}>글 《포브스》, 《Inc.》, 《앙트프러너 Enterpreneur》, 《허핑턴 포스트》</Radio>
                <Radio value={'페이스북, 구글, 유튜브, 인스타그램 믿을 만한 친구'}> 페이스북, 구글, 유튜브, 인스타그램 믿을 만한 친구</Radio>
                <Radio value={'클릭퍼널스는 눈에 자주 띈다'}>클릭퍼널스는 눈에 자주 띈다</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>3단계로 가기</Button>
        </Wrapper>
        <Coution>30초 설문을 마치면 클릭퍼널스 2주 무료 이용 권을 드립니다!</Coution>
      </Main>
    </Container>
  )
}

export default Step2
