import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #F5F9FC;
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width:1170px;
  width: 100%;
  padding: 20px 0;
  /* @media ${device.mobile}{
    max-width: 400px;
  } */
  `;

const Title = styled.h1`
  font-size: 60px;
  /* font-size: 34px; */
  font-weight: 700;
  text-align: center;
`
const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 8px 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  padding: 8px 12px;
  background: #0E3B68;
  margin: 20px 0;
  border-radius: 9px;
  position: relative;
`;
const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #FFFFFF;
  color: ${({color})=>(color ? `${color}` : '#FFF')};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 68%;
`;

const Iconbox = styled.div`
  display: flex;
`;
const Img = styled.img`
cursor: pointer;
`;

const Alert = styled.p`
  color: red;
  font-size: 1rem;
  text-align: center;
  position: absolute;
  top: 36rem;
`

export {Container, Main, Title, Text, InputBox, 
      InputTitle, Wrapper, InputWrap, Img, Iconbox, Alert };