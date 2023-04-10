import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient( #E0ECFB, #FFFFFF);
  height: 100vh;
  @media ${device.tablet}{
    height: 100%;
  };
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  padding: 80px 0;
  `;

const Tit = styled.h1`
  width: 86%;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  @media ${device.tablet}{
    font-size: 3rem;
    width: 90%;
  };
  @media ${device.mobile}{
    font-size: 40px;
    width: 93%;
  };
  
`;
const Text = styled.p`
  width: 74%;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  @media ${device.tablet}{
    font-size: 22px;
    width: 90%;
    margin: 20px 0;
  };
  @media ${device.mobile}{
    font-size: 18px;
    margin: 12px 7px;
  };
`;

const Img = styled.img`
  width: 95%;
  margin-top: 50px;
`;


export {Container, Main,  Text, Tit, Img};