import React from 'react';
import { Container, Introbox, IntroImg, IntroText, IntroTextBox, IntroTitle,  
  Main,  QuesText, AdHead, Title, Icon, FunctionCard, Suptitle, BoxUnit,
  CanWrapper, CanText, CanImgBox, CanImg, ResponsiveImg, TabletImg} from './style';
import introPic from '../../assets/imgs/clicknow.png';
import canImg_1 from '../../assets/imgs/box-1.avif';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';

const OpportunityPage = () => {
  const navigate = useNavigate();
  const onClick = () =>{
    navigate('/form/step-1')
  }
  return (
    <Container>
      <Main>
        <Introbox>
          <IntroImg src={introPic}></IntroImg>
          <IntroTextBox>
            <IntroTitle>ClickFunnels는 "퍼널(Funnels)"을 통해 고객들이 여러분을 찾아오도록 도와줍니다!</IntroTitle>
            <ResponsiveImg src={introPic}/>
            <TabletImg src={introPic}/>
            <IntroText>우리는 최초의 퍼널 빌더이자, 페이스북, 구글, 유튜브, 인스타그램 또는 틱톡과 같은 사이트에서 사용자를 모아서 당신의 상점으로 이끌어주는 첫 번째 플랫폼입니다!
            </IntroText>
            <IntroText>만약 당신이 페이스북, 구글, 유튜브, 인스타그램, 혹은 틱톡에서 광고를 클릭해본 적이 있다면, 그 광고를 만든 사람이 제대로 했다면 아마도 당신이 바로 이동한 페이지가 ClickFunnels의 한 퍼널 중 하나였을 가능성이 높습니다!</IntroText>
            <IntroText>그리고 이제야 알아채셨군요! 당신은 지금 ClickFunnels의 펀넬 속에 있습니다! (네, 이들은 진짜로 동작합니다!)</IntroText>
          </IntroTextBox>
        </Introbox>
        <QuesText>그러나 ClickFunnels가 하는 일은 그것이 전부는 아닙니다 ...</QuesText>
        <Title>ClickFunnels은 온라인 제품을 마케팅하고 판매하며 배송하는 데 필요한 모든 것을 제공합니다 </Title>
        <AdHead>하나로 모아진 모든 것!</AdHead>
        <Icon.Down/>

        <FunctionCard>
          <IntroTextBox>
            <Suptitle>ClickFunnels는...</Suptitle>
            <IntroTitle>당신의 웹사이트</IntroTitle>
            <IntroText>웹사이트나 블로그를 만드는 것은 예전에는 지치는 일이었습니다. 보통 디자인하고 개발하는 데 걸리는 시간이 오래 걸렸는데 이제는 하루만에 해결할 수 있습니다!</IntroText>
            <BoxUnit>FunnelHubs를 사용하면...</BoxUnit>
            <CanWrapper>
              <Icon.Right/>
              <CanText>매우 빠른 페이지 로딩 속도를 경험하여, 더 많은 전환과 판매를 이룰 수 있습니다</CanText>
            </CanWrapper>
            <CanWrapper>
              <Icon.Right/>
              <CanText>전적으로 맞춤화 가능하며, 컴퓨터 기술에 관계없이 누구나 사용할 수 있는 드래그 앤 드롭 페이지 빌더</CanText>
            </CanWrapper>
            <CanWrapper>
              <Icon.Right/>
              <CanText>내용을 입력하고 스위치를 누르면 즉시 사용 가능한 수십 개의 아름다운 페이지 템플릿이 준비되어 있습니다</CanText>
            </CanWrapper>
            <CanText>ClickFunnels는 다음을 대체합니다:</CanText>
            <Icon.Brand/>
          </IntroTextBox>
          <CanImgBox>
            <CanImg src={canImg_1}/> 
            <Button onClick={onClick} >지금 무료 평가판을 시작하세요</Button>
            <Index>계약 없음 • 언제든지 해지 가능</Index>
          </CanImgBox>
        </FunctionCard>

      </Main> 
    </Container>
    

  )
}

export default OpportunityPage;
