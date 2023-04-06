import styled from "styled-components";
import { ReactComponent as tony } from "../../assets/icons/Brands-Tony-Robbins.svg";
import { ReactComponent as master } from "../../assets/icons/Brands-Mastermind.svg";
import { ReactComponent as lady } from "../../assets/icons/Brands-LadyBoss.svg";
import { ReactComponent as camping } from "../../assets/icons/Brands-CampingWorld.svg";
import { device } from "../Generic/responsive"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 60px 0;
  background: linear-gradient(to right, #E0ECFB, #F4F9FC);
`;

  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  padding: 60px;
  @media ${device.mobile}{
    padding: 40px;
  }
`;

const UpTitle = styled.p`
  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 40px;
  @media ${device.mobile}{
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const BrandWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1108px;
  height: 50px;
  align-items: center;
  gap: 45px;
  @media ${device.tablet}{
    flex-direction: column;
    width: 90%;
    height: auto;
  
  }
  @media ${device.mobile}{
    flex-direction: column;
    width: 380px;
    height: auto;
    gap: 15px;
  }
`;

const Icon = styled.div``;

Icon.Tony = styled(tony)`
  width: 25%;
  height: 50px;
  @media ${device.tablet}{
    width: 100%;
  }
  @media ${device.mobile}{
    width: 270px;
  }
`;
Icon.Master = styled(master)`
  width: 25%;
  height: 50px;
  @media ${device.tablet}{
    width: 100%;
  }
  @media ${device.mobile}{
    width: 270px;
  }
`;
Icon.Lady = styled(lady)`
  width: 25%;
  height: 50px;
  @media ${device.tablet}{
    width: 100%;
  }
  @media ${device.mobile}{
    width: 270px;
  }
`;
Icon.Camping = styled(camping)`
  width: 25%;
  height: 50px;
  @media ${device.tablet}{
    width: 100%;
  }
  @media ${device.mobile}{
    width: 270px;
  }
`;


export {Container, Main, UpTitle, Icon, BrandWrap}