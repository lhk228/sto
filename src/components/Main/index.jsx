import React, {useState, useEffect, useRef} from 'react';
import { Container, Main, Title, Text, VideoBox, Alert, InputBox, InputTitle, Wrapper, InputWrap, } from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Checkbox } from 'antd';
import Contact from '../Contacts'


const MainP = () => {
  const [data, setData] = useState({
    Email: '',
    Phone: '',
  });
  const api_post = () => {
    fetch('https://api.mever.me/api/v1/req2', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.ErrorCode === 0) {
          alert('문의가 접수되었습니다.');
        } else {
          alert('시스템오류, 관리자에게 문의하십시오.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const onSubmit = (event) => {
    if (data.Email.includes('@', '.') &&
        data.Phone.includes('-') &&
        isChecked) {
      navigate('/next-step');
      event.preventDefault();
    api_post();
    
    }else{
      setDisplayText('빈칸 없이 정확히 입력 해 주세요!');

    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
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
          <Title>  CEO를 위한  『3분    뉴스』</Title>
          <Text>앞서가는 CEO를 위해! </Text>
          <Text>AI를 활용한 경영·마케팅·수익모델 관련 <br />
                뉴스를 매일 3분 요약하여 “무료”로 보내드립니다.
          </Text>
          <VideoBox>
            <ReactPlayer  ref={playerRef} playing={true} width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 '핸드폰 번호' 입력란</InputTitle>
            <Wrapper>
                <InputWrap>
                <Input type="email" name="Email" value={data.Email} onChange={handleChange} placeholder='이메일 (초기 입력 메일과 동일)' />
                <Input type="tel" name="Phone" value={data.Phone} onChange={handleChange} placeholder='핸드폰번호 (예)010-1234-5678'/>
                </InputWrap>
                  <Checkbox checked={isChecked} onChange={handleCheckboxChange} className='checkbox'>개인정보활용 동의</Checkbox>
                <Alert>{displayText}</Alert>  
              <Button type='main' onClick={onSubmit} >무료 뉴스 신청하기</Button>
            </Wrapper>
          </InputBox>
          <Contact/>
      </Main>
    </Container>

  )
}

export default MainP
