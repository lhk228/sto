import React from 'react';
import { Container, Introbox, IntroImg, IntroText, IntroTextBox, IntroTitle, IntroUnit, 
  Main, SubTitle, Title, CompareBox, CompareWrapper, CompareTitle, Icon, Shorts,
  IconBox, 
  QuesText,
  AdHead} from './style';
import introPic from '../../assets/imgs/whyIntro.avif'
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';

const WhyFourthPage = () => {
  const onClick =()=>{
    window.location.href = 'https://merisa-pricing.netlify.app/'
  }
  return (
    <Container>
      <Main>
        <Introbox>
          <IntroTextBox>
            <IntroTitle>그렇다면, 왜 퍼널인가요?</IntroTitle>
            <IntroText>솔직히 말하자면, 지불 고객이 없는 웹사이트는 도로가 전혀 이어지지 않은 사막 가운데에 가게를 지은 것과 같습니다.</IntroText>
            <IntroUnit>그곳에 "퍼널"이 등장합니다.</IntroUnit>
            <IntroText>퍼널은 꿈의 고객을 귀사 웹사이트로 유입시켜서 그들이 신용 카드를 들고 귀사의 온라인 스토어로 이동할 수 있도록 하는 "디지털 도로"와 같습니다!</IntroText>
          </IntroTextBox>
          <IntroImg src={introPic}></IntroImg>
        </Introbox>
        <Title>퍼널은 온라인 성공의 비밀입니다</Title>
        <SubTitle>수익을 내지 못하는 19억 2,999만 9,999개의 웹사이트와 수익을 창출하는 0.000000002%의 웹사이트와의 차이점이 됩니다!</SubTitle>
        <CompareWrapper>
          <CompareBox>
            <CompareTitle>퍼널 없이는</CompareTitle>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>고객이 없습니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>판매가 없습니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>혼란스러운 구매 과정입니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>슬픔이 따릅니다</Shorts>
            </IconBox>
          </CompareBox>
          <CompareBox>
            <CompareTitle>퍼널이 있다면</CompareTitle>
            <IconBox>
              <Icon.Check/>
              <Shorts>고객의 유입이 지속됩니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>간편한 구매 과정이 제공됩니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>판매 기회가 증가합니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>슬픔의 반대가 됩니다</Shorts>
            </IconBox>
          </CompareBox>
        </CompareWrapper>
        <QuesText>슬픔의 반대감을 느끼는 것이 좋으신가요?</QuesText>
        <AdHead>그렇다면, 지금 바로 ClickFunnels 무료 체험을 신청해 보세요!</AdHead>
        <Button onClick={onClick} type={'large'}>지금 무료 평가판을 시작하세요</Button>
        <Index>계약 없음 • 언제든지 해지 가능</Index>
      </Main> 
    </Container>

  )
}

export default WhyFourthPage;
