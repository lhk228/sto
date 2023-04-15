import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top, BottomClose, TopClose } from '../Generic/transform';
const Step4 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const [close, setClose] = useState(false);
  const onClick =()=> {
    if(value){
      setTimeout(()=>{navigate('/form/step-5')}, 420)
      setClose(true)
      array.push(value);
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
        <Title>다음의 간단한 질문에 답하면, 어떤 퍼널이 당신의 사업에 가장 적합한지 찾아줍니다.</Title>
        <Text>현재 사업을 하면서 세일즈 퍼널을 사용합니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={80} showInfo={false} />
        <Note>4 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={' 현재 세일즈 퍼널 하나를 잘 활용 하고 있다'}> 현재 세일즈 퍼널 하나를 잘 활용 하고 있다</Radio>
                <Radio value={'하나가 있긴 하지만 사용하지 않 는다'}>하나가 있긴 하지만 사용하지 않 는다</Radio>
                <Radio value={'아직 하나도 없다'}>아직 하나도 없다</Radio>
                <Radio value={"'세일즈 퍼널'이 무엇인지 모른다"}>'세일즈 퍼널'이 무엇인지 모른다</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>5단계로 가기</Button>
        </Wrapper>
        <Coution>30초 설문을 마치면 클릭퍼널스 2주 무료 이용 권을 드립니다!</Coution>
      </Main>
    </Container>
  )
}

export default Step4
