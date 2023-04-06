import styled from "styled-components";
import {ReactComponent as down} from '../../assets/icons/down-chevron-svgrepo-com.svg'
import {device} from '../Generic/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;
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
  margin-bottom: 30px;
  @media ${device.mobile}{
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  font-size:20px;
  font-weight:900;
  line-height: 150%;
  @media ${device.mobile}{
    font-size: 14px;
    width: 90%;
  }
`;

  const Icon = styled.div``;
  Icon.DownDir = styled(down)`
  width: 20px;
  height: 20px;
  @media ${device.mobile}{
    width: 15px;
    height: 15px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding:  20px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover{
    background: #F4F9FC;
  };

`;

export {Container, Main, Title, Text, Icon, Box }