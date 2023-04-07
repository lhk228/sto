import React, {useState, useEffect, useRef} from 'react';
import { Container, Main, Title, Text, VideoBox, Alert, InputBox, InputTitle, Wrapper, InputWrap, } from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Checkbox } from 'antd';
import Contact from '../Contacts'


const MainP = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const onClick = () => {
    if (inputValue.length !== 0 && inputValue1.length !== 0 && isChecked) {
      navigate('/next-step')
      console.log(
       
      );

    }else{
      setDisplayText('개인정보를 다시 확인하세요!');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const onChange = (event) => {
    setInputValue1(event.target.value);
  };
  const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const playerRef = useRef(null);

    useEffect(() => {
      const hasPlayedBefore = localStorage.getItem('hasPlayedBefore');
  
      if (!hasPlayedBefore) {
        playerRef.current?.getInternalPlayer()?.playVideo();
        localStorage.setItem('hasPlayedBefore', true);
      }
    }, []);
  
  return (
    <Container>
      <Main>
          <Title>  “CEO를 위한” 3분 뉴스</Title>
          <Text>앞서가는 CEO를 위해, </Text>
          <Text>최신 IT기술을 활용한 경영/마케팅/BM 뉴스를 <br />
                매일 3분 요약하여 “무료”로 보내드립니다.
          </Text>
          <VideoBox>
            <ReactPlayer  ref={playerRef} playing={true} width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 메일주소 입력란</InputTitle>
            <Wrapper>
              
                <InputWrap>
                <Input onChange={handleChange} placeholder='이메일 주소 입력(필수)'/>
                <Input onChange={onChange} placeholder='핸드폰번호'/>

                </InputWrap>
                  <Checkbox checked={isChecked} onChange={handleCheckboxChange} className='checkbox'>개인정보활용 동의</Checkbox>
                <Alert>{displayText}</Alert>  
              <Button type='main' onClick={onClick} >무료뉴스 신청하기</Button>
            </Wrapper>
          </InputBox>
          <Contact/>
      </Main>
    </Container>

  )
}

export default MainP
