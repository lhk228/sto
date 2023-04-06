import React from 'react';
import {  Box, Container, Icon, Img, Main, Text, Wrapper } from './style';
import logo from '../../assets/imgs/merisa.jpg'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>
        <Box gap='0' width='285px'>
          
          <Img onClick={()=>navigate('/pricing')} src = {logo} />
          <Text  textDecoration='none' cursor='normal'>ClickFunnels.com, an Etison Product.</Text>
          <Text  textDecoration='none' cursor='normal'>판권 소유 © 2019-2023.</Text>
          <Text  textDecoration='none' cursor='normal'> 부산광역시 서구 구덕로 225</Text>
          <Wrapper>
            <Icon.Youtube/>
            <Icon.Facebook/>
            <Icon.Twitter/>
            <Icon.Linkedin/>
            <Icon.Instagram/>
          </Wrapper>
        </Box>
        <Box>
          <Text textDecoration='none' fontWeight='900' cursor='normal'>제품</Text>
          <Text>세일즈 퍼널</Text>
          <Text>웹사이트</Text>
          <Text>전자상거래 상점</Text>
          <Text>방문 페이지</Text>
          <Text>블로그</Text>
          <Text>고객센터</Text>
          <Text>이메일 마케팅</Text>
          <Text>워크플로우</Text>
        </Box>
        <Box>
          <Text visibility = 'hidden'></Text>
          <Text>온라인 코스</Text>
          <Text>회원 사이트</Text>
          <Text>CRM</Text>
          <Text>ClickFunnels 편집기</Text>
          <Text>A/B 테스트</Text>
          <Text>해석학</Text>
          <Text>글로벌 제품</Text>
          <Text>가격</Text>
        </Box>
        <Box>
          <Text textDecoration='none' fontWeight='900' cursor='normal'>회사</Text>
          <Text>오리진 스토리</Text>
          <Text>팀을 만나다</Text>
          <Text>위치</Text>
          <Text>채용</Text>
          <Text>제휴 프로그램</Text>
          <Text>합법적인</Text>
          <Text>개인 정보 정책</Text>
        </Box>
        <Box>
          <Text textDecoration='none' fontWeight='900' cursor='normal'>돕다</Text>
          <Text>ClickFunnels 2.0 로그인</Text>
          <Text>ClickFunnels 클래식 로그인</Text>
          <Text>ClickFunnels 블로그</Text>
          <Text>지원 센터</Text>
          <Text>공식 페이스북 그룹</Text>
          <Text>비즈니스 도구</Text>
          <Text>ClickFunnels 상태</Text>
        </Box>
      </Main>

      
    </Container>
    

  )
}

export default Footer;

