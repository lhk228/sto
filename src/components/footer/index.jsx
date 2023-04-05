import React from 'react'
import { Container, Main, Suptitle, Title, Text, Index, IconCheck, Wrapper, Section, SectionText } from './style';
import { Button } from '../Generic';
import iconCheck from '../../assets/icons/check.svg'
import { useNavigate } from 'react-router-dom';


const Intro = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/pro-monthly/step-1')
  }
  return (
    <Container>
      <Main>
        <Suptitle>고객의 꾸준한 유입을 얻기 어려우신가요?</Suptitle>
        <Title>Funnels를 만나보세요.</Title>
        <Text>사람들을 귀사 웹사이트로 유입시켜서 만족스러운 고객으로 전환시키는 것이 우리가 가장 잘하는 일입니다.</Text>
        <Button onClick={onClick} type={'large'}>오늘 무료 평가판을 시작하세요</Button>
        <Index>계약 없음 • 언제든지 해지 가능</Index>
        <Wrapper>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>컴퓨터 기술이 필요하지 않습니다</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>모든 유형의 비즈니스에 적용됩니다</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>전문가처럼 마케팅, 판매 및 제공이 가능</SectionText>
          </Section>
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Intro;
