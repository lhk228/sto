import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 414px;
  width: 100%;
  padding: 20px 0;
  `;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Tit = styled.h1`
  font-size: 40px;
  font-weight: 800;
  text-align: center;
`
const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  text-align: center;
`
const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 8px 0;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0E3B68;
  width: 96%;
  height: auto;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  margin-bottom: 15px
`;

const VideoBox = styled.div`
  width: 100%;
  height: 210px;
  
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

const Iconbox = styled.div`
  display: flex;
`;
const Img = styled.img`
cursor: pointer;
`;


export {Container, Main, Title, Text, VideoBox, InputBox, Box, 
        Section, InputTitle, Wrapper,  Img, Iconbox, Tit};