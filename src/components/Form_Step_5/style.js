import styled from "styled-components";
import {device} from '../Generic/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
  max-width: 580px;
  width: 100%;
  height: auto;
  box-shadow: 0px 10px 40px 0px rgba(29, 46, 59, 0.15);
  border-radius: 10px;
  padding: 40px 70px;
  margin-bottom: 10rem;
  position: relative;
  @media ${device.mobile}{
    padding: 30px 20px;
    width: 94%;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.06rem;
  margin-bottom: 30px;
`;

const Note = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;



export { Container, Main, Title, Note, }