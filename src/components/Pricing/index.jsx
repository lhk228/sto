import React from 'react';
import { Container, Main, Title, Text, VideoBox, InputBox, InputTitle, Wrapper, InputWrap, Section, Iconbox, Img} from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Checkbox } from 'antd';
import sns1 from '../../assets/icons/sns1.png'
import sns2 from '../../assets/icons/sns2.png'
import sns3 from '../../assets/icons/sns3.png'
import sns4 from '../../assets/icons/sns4.png'
import sns5 from '../../assets/icons/sns5.png'
import sns6 from '../../assets/icons/sns6.png'

const Pricing = () => {
  const navigate = useNavigate();
  
  const onClick =(e)=>{
    
  
      navigate('/pro-monthly/step-1')
    
  }
  return (
    <Container>
      <Main>
        <Section>
          <Title>"쩐의 미래" 3분뉴스</Title>
          <Text>오늘자 AI·3D·STO 뉴스를</Text>
          <Text>3분 요약하여 "무료"로 보내드립니다</Text>
          <VideoBox>
            <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 메일주소 입력란</InputTitle>
            <Wrapper>
              <InputWrap>
                <Input placeholder='이메일 주소 입력(필수)'/>
                <Input placeholder='핸드폰번호'/>
              </InputWrap>
              <Button onClick={onClick} type={'sto'}>무료뉴스 신청하기</Button>
            </Wrapper>
            <Checkbox className='checkbox'>개인정보활용 동의</Checkbox>
          </InputBox>
        </Section>
        <Section>
          <InputTitle color='#000'>문의전화</InputTitle>
          <Text>1688-9050</Text>
          <Iconbox>
            <Img src={sns1}/>
            <Img src={sns2}/>
            <Img src={sns3}/>
            <Img src={sns4}/>
            <Img src={sns5}/>
            <Img src={sns6}/>
          </Iconbox>
        </Section>
        
      </Main>
    </Container>

  )
}

export default Pricing
