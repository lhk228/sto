import React from 'react';
import { Container, Main, Title, Text, Wrapper, Plan, Box, Line, Note, NoteWrap, Position, Wrap } from './style';
import {Button} from '../Generic';
import AbilityPage from '../6_HomePage_Ability';
import QuestionsPage from '../8_HomePage_Questions';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
const PricingHome = () => {
  const navigate = useNavigate();
  const onClick =()=>{
    navigate('/pro-monthly/step-1')
  }
  return (
    <Container>
      <Main>
        <Title width='65%'>계획을 선택하고 무료 14일 평가판 시작</Title>
        <Text margin='15px 0'>'Funnel Hacker' 계획으로 연간 최대 $3,468 절약</Text>
        <Position>
          <Wrap>
            <Plan>연간 할인</Plan>
            <Plan>월간 계획</Plan>
          </Wrap>
          <Wrapper>
            <Box>
              <Title fontSize='34px'>Basic</Title>
              <Text fontSize ='14px'>일반적으로 $147/월</Text>
              <Line/>
              <Title fontWeight = '700' fontSize='32px'>$127/월</Title>
              <Text margin='10px 0' fontSize='13px'>매년 <b>청구($240/년 절약)</b></Text>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>
              <NoteWrap>
                <Note>1 웹사이트</Note>
                <Note>20 깔때기</Note>
                <Note>1 관리 사용자</Note>
                <Note>1 도메인</Note>
                <Note>3개 코스</Note>
                <Note>1,000명의 학생</Note>
                <Note>10,000개의 연락처</Note>
                <Note>무제한 워크플로우</Note>
                <Note>무제한 페이지</Note>
                <Note>무제한 제품</Note>
                <Note>무제한 이메일 시퀀스</Note>
                <Note>기본 분석</Note>
                <Note>CF1 유지 관리 모드 계획</Note>
                <Note>—</Note>
                <Note>—</Note>
                <Note>—</Note>
                <Note>—</Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>         
            </Box>
            <Box>
              <Title fontSize='34px'>Pro</Title>
              <Text fontSize ='14px'>일반적으로 $197/월</Text>
              <Line/>
              <Title fontWeight = '700' fontSize='32px'>$157/월</Title>
              <Text margin='10px 0' fontSize='13px'>매년 <b>청구($480/년 절약)</b></Text>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>
              <NoteWrap>
                <Note>1 웹사이트</Note>
                <Note><b>100 </b>깔때기</Note>
                <Note><b>5</b> 관리 사용자</Note>
                <Note><b>3</b> 도메인</Note>
                <Note><b>15개</b> 코스</Note>
                <Note><b>10,000명</b>의 학생</Note>
                <Note><b>25,000개</b>의 연락처</Note>
                <Note>무제한 워크플로우</Note>
                <Note>무제한 페이지</Note>
                <Note>무제한 제품</Note>
                <Note>무제한 이메일 시퀀스</Note>
                <Note>기본 분석</Note>
                <Note><b>제휴 프로그램</b></Note>
                <Note><b>API 액세스</b></Note>
                <Note><b>ShareFunnels</b></Note>
                <Note><b>액체 테마 편집기</b></Note>
                <Note><b>CF1 유지 관리 모드 계획</b></Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>     
            </Box>
            <Box backGround = 'rgb(21, 30, 82)'>
              <Title color='#FFF' fontSize='34px'>Pro</Title>
              <Text color='#FFF' fontSize ='14px'>일반적으로 $497/월</Text>
              <Line/>
              <Title color='var(--color-6Z-dzM8-7)' fontWeight = '700' fontSize='32px'>$208/월</Title>
              <Text color='#FFF' margin='10px 0' fontSize='13px'>매년 <b>청구($480/년 절약)</b></Text>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>
              <NoteWrap>
                <Note color='#FFF'>3 웹사이트</Note>
                <Note color='#FFF'><b>무제한</b> 퍼널</Note>
                <Note color='#FFF'><b>15</b>명의 관리 사용자</Note>
                <Note color='#FFF'><b>9</b>개 도메인</Note>
                <Note color='#FFF'><b>200개</b> 코스</Note>
                <Note color='#FFF'><b>20,000명</b>의 학생</Note>
                <Note color='#FFF'><b>200,000</b> 연락처</Note>
                <Note color='#FFF'>무제한 워크플로우</Note>
                <Note color='#FFF'>무제한 페이지</Note>
                <Note color='#FFF'>무제한 제품</Note>
                <Note color='#FFF'>무제한 이메일 시퀀스</Note>
                <Note color='#FFF'><b>고급 </b>분석</Note>
                <Note color='#FFF'>제휴 프로그램</Note>
                <Note color='#FFF'>API 액세스</Note>
                <Note color='#FFF'>ShareFunnels</Note>
                <Note color='#FFF'>액체 테마 편집기</Note>
                <Note color='#FFF'>CF1 유지 관리 모드 계획</Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>무료 평가판 시작</Button>     
            </Box>
          </Wrapper>
        </Position>
        
      </Main>
      <AbilityPage/>
      <QuestionsPage/>
      <Footer/>
    </Container>

  )
}

export default PricingHome;
