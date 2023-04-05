import React from 'react'
import { Container, Iconbox, Main, Img, Title, Text} from './style';
import sns1 from '../../assets/icons/sns1.png'
import sns2 from '../../assets/icons/sns2.png'
import sns3 from '../../assets/icons/sns3.png'
import sns4 from '../../assets/icons/sns4.png'
import sns5 from '../../assets/icons/sns5.png'
import sns6 from '../../assets/icons/sns6.png'

const Footer = () => {
  const onClick1 = () => {
    window.location.href = 'https://www.youtube.com/channel/UCXHaChrER0XYPrR43S7mx5A';
  }
  const onClick2 = () => {
    window.location.href = '';
  }
  const onClick3 = () => {
    window.location.href = 'https://www.instagram.com/official_mever/';
  }
  const onClick4 = () => {
    window.location.href = 'https://www.facebook.com/people/%EB%A9%94%EB%B2%84/100088805142901/';
  }
  const onClick5 = () => {
    window.location.href = 'https://blog.naver.com/mevershop';
  }
  const onClick6 = () => {
    window.location.href = 'https://pf.kakao.com/_cLNxib';
  }

  return (
    <Container>
      <Main>
        <Title>문의전화</Title>
        <Text>1688-9050</Text>
        <Iconbox>
          <Img onClick={onClick1} src={sns1}/>
          <Img onClick={onClick2} src={sns2}/>
          <Img onClick={onClick3} src={sns3}/>
          <Img onClick={onClick4} src={sns4}/>
          <Img onClick={onClick5} src={sns5}/>
          <Img onClick={onClick6} src={sns6}/>
        </Iconbox>
      </Main>
    </Container>
  )
}

export default Footer;
