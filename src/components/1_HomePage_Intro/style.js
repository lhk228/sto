import styled from "styled-components";
import { device } from '../Generic/responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--color-6Z-dzM8-3);

`;

  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  @media ${device.tablet}{
    max-width: 820px;
    width: 100%;
    padding: 0 20px;
  }

`;
const Suptitle = styled.p`
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: 2.25rem;
  margin: 40px 0 15px 0;
  @media ${device.tablet}{
    font-size: 22px;
  }
  @media ${device.mobile}{
    font-size: 18px;
  };
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 900;
  text-align: center;
  @media ${device.tablet}{
    font-size: 68px;
  }
  @media ${device.mobile}{
    font-size: 32px;
  };
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0;
  text-align: center;
  width: 80%;
  margin-bottom: 30px;
 
  @media ${device.mobile}{
    font-size: 17px;
    margin: 20px 0;
  };
`;

const Index = styled.p`
  font-weight: 500;
  line-height: 140%;
  font-size: 14px;
  color: ${({color})=>(color ? `${color}` : 'var(--color-6Z-dzM8-4)')};
  margin: 10px 0;
`;

const IconCheck = styled.img`
color:  var(--color-6Z-dzM8-7);
width: 30px;
@media ${device.mobile}{
    width: 20px;
  };
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media ${device.tablet}{
    display: none;
    };
  @media ${device.mobile}{
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 90%;
    margin: 15px 0;
  };
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 20px 0;
  @media ${device.mobile}{
    padding: 0;
  };
`;

const SectionText = styled.p`
  font-size: 19px;
  font-weight: 600;
  line-height: 140%;
  color: rgb(29, 46, 59);
  @media ${device.mobile}{
    font-size: 15px;
  };
`


export {Container, Main, Suptitle, Title, Text, Index, IconCheck, Wrapper, Section, SectionText}