import styled from "styled-components";
import {device} from "../Generic/responsive"

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
  width: 200%;
  margin-top: 10px;
  @media ${device.mobile}{
    width: 100%;
  }
  `;

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  `;
const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 8px 0;
`;
const Iconbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  @media ${device.tablet}{
    width: 70%;
    margin-top: 10px;
  }
  @media ${device.mobile}{
    width: 100%;
  }
`;
const Img = styled.img`
cursor: pointer;
width: 48px;
height: 48px;
`;

export {Container, Main, Iconbox, Img, Title, Text}