import React from 'react';
import { Container, Main,  QuesText, Icon, Title, Box,
        Item, Text, Wrapper, AdTitle, AdBox, AdText, AdImg,
        } from './style';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import Logo from '../../assets/imgs/merisa.jpg'
import { useNavigate } from 'react-router-dom';
const AbilityPage = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/form/step-1');
  }
  const onBox = () => {
    navigate('/features')
  }
  return (
    <Container>
      <Main>
        <Title>메버는 CEO들이 온라인 성공에 필요한 모든 것을 제공합니다.</Title>
        <QuesText>고객이 귀사 웹을 찾도록 유도하는 메버!</QuesText>
        <Wrapper>
            <Box onClick={onBox}>
              <Icon.Sales/>
              <Item>3D 마케팅 설계</Item>
              <Text>온라인 방문자를 실제 구매 고객으로 전환합니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Website/>
              <Item>3D 웹사이트</Item>
              <Text>당신이 원하는 방식으로 완벽한 웹 프리즌스를 만듭니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Online/>
              <Item>CEO 교육과정</Item>
              <Text>당신의 지식, 열정 또는 경험을 수익으로 전환합니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Store/>
              <Item>전자상거래 3D스토어</Item>
              <Text>온라인 제품 판매를 위한 온라인 스토어를 만듭니다. </Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Crm/>
              <Item>CRM</Item>
              <Text>학생이나 잠재고객을 관리하고 그들을 팬으로 만듭니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Landing/>
              <Item>랜딩 페이지</Item>
              <Text>당신의 웹사이트나 퍼널을 위한 랜딩 페이지를 만듭니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Membership/>
              <Item>1.10.100억 매출챌린지</Item>
              <Text>반복적인 수익을 창출하기 위해 멤버십 사이트를 구축합니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Email/>
              <Item>이메일 마케팅</Item>
              <Text>당신의 관객이 있는 곳에 도달하고 관여합니다. </Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Ab/>
              <Item>A/B 테스트</Item>
              <Text>당신의 웹사이트, 퍼널 또는 이메일 캠페인에 A/B 테스트를 실행하세요.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Blog/>
              <Item>AI콘텐츠</Item>
              <Text>당신의 산업에서 전문가로 인식되도록 블로그를 작성하세요.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Customer/>
              <Item>고객센터</Item>
              <Text>고객 개인 맞춤형 고객센터로 고객 만족도를 높이세요.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Analytics/>
              <Item>해석학</Item>
              <Text>귀하의 비즈니스 성장에 필요한 모든 데이터를 얻으세요. </Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Click/>
              <Item>메버 편집기</Item>
              <Text>쉽고 강력한 드래그 앤 드롭 페이지 편집 경험을 제공합니다.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Work/>
              <Item>워크플로우</Item>
              <Text>마케팅 자동화를 위해 강력한 워크플로우를 만드세요.</Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Global/>
              <Item>글로벌 제품</Item>
              <Text>제품을 한 번 만들고 어떤 퍼널 내에서든 판매하세요. </Text>
            </Box>
            <Box onClick={onBox}>
              <Icon.Shopping/>
              <Item>꿈의고객 모임</Item>
              <Text>출시 예정…</Text>
            </Box>
        </Wrapper>
        <AdBox>
          <AdImg src={Logo}/>
          <AdTitle>메버를 무료로 경험해 보세요!</AdTitle>
          <AdText>메버를 적극적으로 사용하여 제품과 메시지를 전 세계에 쉽게 알리고 있는 CEO 및 유튜버들과 함께하세요!</AdText>
          <Button onClick={onClick} >처음 오신 CEO를 위한, 서비스 견적</Button>
          <Index color='#7690A9' >약적 계약 없음 • 언제든지 해지 가능</Index>
        </AdBox>
      </Main> 
    </Container>
  )
}

export default AbilityPage;

