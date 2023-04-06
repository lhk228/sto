import styled from "styled-components";
import {device} from '../Generic/responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Up = styled.div`
  width: 100%;
  background: #042C54;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;


  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  color: #1CBCFF;
  margin-bottom: 30px;
  @media ${device.tablet}{
    width: 95%;
  }
`;

const Text = styled.p`
  color: ${({color}) => (color? `${color}` : 'rgb(29, 46, 59)')};
  font-size:${({fontSize})=> (fontSize? `${fontSize}` : '18px')};
  font-weight: ${({fontWeight})=>(fontWeight? `${fontWeight}` : '400')};
  line-height: ${({lineHeight})=>(lineHeight? `${lineHeight}`: '150%')};
  text-align: ${({textAlign})=>(textAlign? `${textAlign}`: 'start')};
  width: ${({width})=>(width ? `${width}`: '100%' )};
  margin: ${({margin})=>(margin ? `${margin}` : '0')};
  @media ${device.tablet}{
    width: 94%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
  width: 100%;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
  }
  `;
  
  const Img = styled.img`
  width: 355px;
  height: 266px;
  border-radius: 8px;
  `;

export {Container, Up, Main, Title, Text, Wrapper, Img, }