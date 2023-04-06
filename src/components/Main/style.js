import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient( #E0ECFB, #F4F9FC);
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  padding: 20px 0;
  `;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
`
const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 8px 0;
`;

const VideoBox = styled.div`
  width: 96%;
  height: 230px;
  
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

export {Container, Main, Title, Text, VideoBox, InputBox, 
      InputTitle, Wrapper, InputWrap, Img, Iconbox, Alert };