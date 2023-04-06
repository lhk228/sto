import React from 'react';
import { Container, Main,  QuesText, Icon, Title, Box,
        Item, Text, Wrapper, AdTitle, AdBox, AdText, AdImg,
        } from './style';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import Logo from '../../assets/imgs/merisa.jpg'

const AbilityPage = () => {
  const onClick = () => {
    window.location.href = 'https://merisa-pricing.netlify.app/'
  }
  return (
    <Container>
      <Main>
        
        <Title>ClickFunnels는 온라인 성공에 필요한 모든 것을 제공합니다.</Title>
        <QuesText>고객이 귀사를 찾도록 유도하는 플러스 퍼널!</QuesText>
        <Wrapper>
            <Box>
              <Icon.Sales/>
              <Item>판매 퍼널</Item>
              <Text>온라인 방문자를 실제 구매 고객으로 전환합니다.</Text>
            </Box>
            <Box>
              <Icon.Website/>
              <Item>웹사이트</Item>
              <Text>당신이 원하는 방식으로 완벽한 웹 프리즌스를 만듭니다.</Text>
            </Box>
            <Box>
              <Icon.Online/>
              <Item>온라인 코스</Item>
              <Text>당신의 지식, 열정 또는 경험을 수익으로 전환합니다.</Text>
            </Box>
            <Box>
              <Icon.Store/>
              <Item>전자상거래 스토어</Item>
              <Text>온라인 제품 판매를 위한 온라인 스토어를 만듭니다. </Text>
            </Box>
            <Box>
              <Icon.Crm/>
              <Item>CRM</Item>
              <Text>학생이나 잠재고객을 관리하고 그들을 팬으로 만듭니다.</Text>
            </Box>
            <Box>
              <Icon.Landing/>
              <Item>방문 페이지</Item>
              <Text>당신의 웹사이트나 퍼널을 위한 랜딩 페이지를 만듭니다.</Text>
            </Box>
            <Box>
              <Icon.Membership/>
              <Item>회원 사이트</Item>
              <Text>반복적인 수익을 창출하기 위해 멤버십 사이트를 구축합니다.</Text>
            </Box>
            <Box>
              <Icon.Email/>
              <Item>이메일 마케팅</Item>
              <Text>당신의 관객이 있는 곳에 도달하고 관여합니다. </Text>
            </Box>
            <Box>
              <Icon.Ab/>
              <Item>A/B 테스트</Item>
              <Text>당신의 웹사이트, 퍼널 또는 이메일 캠페인에 A/B 테스트를 실행하세요.</Text>
            </Box>
            <Box>
              <Icon.Blog/>
              <Item>블로그</Item>
              <Text>당신의 산업에서 전문가로 인식되도록 블로그를 작성하세요.</Text>
            </Box>
            <Box>
              <Icon.Customer/>
              <Item>고객센터</Item>
              <Text>고객 개인 맞춤형 고객센터로 고객 만족도를 높이세요.</Text>
            </Box>
            <Box>
              <Icon.Analytics/>
              <Item>해석학</Item>
              <Text>귀하의 비즈니스 성장에 필요한 모든 데이터를 얻으세요. </Text>
            </Box>
            <Box>
              <Icon.Click/>
              <Item>Funnels 편집기</Item>
              <Text>쉽고 강력한 드래그 앤 드롭 페이지 편집 경험을 제공합니다.</Text>
            </Box>
            <Box>
              <Icon.Work/>
              <Item>워크플로우</Item>
              <Text>마케팅 자동화를 위해 강력한 워크플로우를 만드세요.</Text>
            </Box>
            <Box>
              <Icon.Global/>
              <Item>글로벌 제품</Item>
              <Text>제품을 한 번 만들고 어떤 퍼널 내에서든 판매하세요. </Text>
            </Box>
            <Box>
              <Icon.Shopping/>
              <Item>쇼핑 카트</Item>
              <Text>출시 예정…</Text>
            </Box>
        </Wrapper>
        <AdBox>
          <AdImg src={Logo}/>
          <AdTitle>ClickFunnels를 무료로 사용해 보세요!</AdTitle>
          <AdText>ClickFunnels를 적극적으로 사용하여 제품과 메시지를 전 세계에 쉽게 알리고 있는 100,000명 이상의 크리에이터 및 기업가와 함께하세요!</AdText>
          <Button onClick={onClick} >오늘 무료 평가판을 시작하세요</Button>
          <Index color='#7690A9' >계약 없음 • 언제든지 해지 가능</Index>
        </AdBox>

      </Main> 
    </Container>
    

  )
}

export default AbilityPage;

