import styled from "styled-components";
import {ReactComponent as youtube} from '../../assets/icons/social-logo-youtube.svg'
import {ReactComponent as facebook} from '../../assets/icons/social-logo-facebook.svg';
import {ReactComponent as twitter} from '../../assets/icons/social-logo-twitter.svg';
import {ReactComponent as linkedin} from '../../assets/icons/social-logo-linkedin.svg';
import {ReactComponent as instagram} from '../../assets/icons/social-logo-instagram.svg';
import {device} from '../Generic/responsive'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid #EBECEF;
  padding: 80px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  @media ${device.mobile} { 
    flex-direction: column;
    gap: 20px;
    align-items: center;

  }
`;

const Box = styled.div`
display: flex;
flex-direction: column;
gap: ${({gap})=> (gap ? `${gap}` : '15px')};
width: ${({width})=> (width ? `${width}` : '210px')};


`;

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
`;
const Text = styled.p`
  visibility: ${({visibility})=>(visibility ?`${visibility}` : 'visible')};
  text-align: left;
  font-weight: ${({fontWeight})=>(fontWeight ? `${fontWeight}` : '400')};
  cursor: ${({cursor})=>(cursor ? `${cursor}` : 'pointer')};
  line-height: 140%;
  font-size: 0.875rem;
  &: hover{
    text-decoration: ${({textDecoration})=>(textDecoration ? `${textDecoration}` : 'underline')}
  }
`;
const Icon = styled.div``;

const Img = styled.img`
  width: 215px;
  height:35px;
  margin-bottom: 20px;
  cursor: pointer;
`;
Icon.Youtube = styled(youtube)`
  opacity: 25%;
  cursor: pointer;
`;
Icon.Facebook = styled(facebook)`
  opacity: 25%;
  cursor: pointer; 
`;
Icon.Twitter = styled(twitter)`
  opacity: 25%;
  cursor: pointer;
`;
Icon.Linkedin = styled(linkedin)`
  opacity: 25%;
  cursor: pointer;
`;
Icon.Instagram = styled(instagram)`
  opacity: 25%;
  cursor: pointer;
`;

export {Container, Main, Box, Wrapper, Text, Icon, Img }