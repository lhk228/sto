import styled from "styled-components";
import {ReactComponent as lock} from '../../assets/icons/lock-svgrepo-com.svg'
import {device} from '../Generic/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Main = styled.div`
  max-width: 580px;
  width: 100%;
  height: 595px;
  box-shadow: 0px 10px 40px 0px rgba(29, 46, 59, 0.15);
  border-radius: 10px;
  padding: 40px 70px;
  position: relative;
  @media ${device.mobile}{
    padding: 30px 20px;
    width: 94%;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: -0.06rem;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin: 20px 0;
  width: 93%;
`;

const Note = styled.p`
  font-weight: 400;
  letter-spacing: 0;
  line-height: 120%;
  font-size: 0.875rem;
  color: rgb(77, 82, 86);
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CoWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

const Coution = styled.p`
  font-weight: 400;
  line-height: 140%;
  font-size: 0.75rem;
  color: rgb(77, 82, 86);
  margin-top: 20px;
`;

const Icon = styled.div``;

Icon.Lock = styled(lock)`
width: 10.5px;
height: 13px;
`;

const Alert = styled.p`
  text-align: center;
  color: red;
  font-size: 14px;
  position: absolute;
  top: 272px;
  left: 36%;
  @media ${device.mobile}{
    top: 268px;
    left: 28%;
  }
`
const Img = styled.img`
  width: 300px;
  margin: 40px 0;
`;

export { Container, Main, Img, Title, Text, Note, Wrapper, CoWrap, Coution, Alert, Icon}