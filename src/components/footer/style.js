import styled from "styled-components";


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
`;
const Suptitle = styled.p`
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: 2.25rem;
  margin: 40px 0 15px 0;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 900;

`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0;
  text-align: center;
  margin: 0 110px 30px 110px;
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (max-width: 375px){
    flex-direction: column;
    background-color: yellow;
  }
  

`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 20px 0;
`;

const SectionText = styled.p`
  font-size: 19px;
  font-weight: 600;
  line-height: 140%;
  color: rgb(29, 46, 59);
`


export {Container, Main, Suptitle, Title, Text, Index, IconCheck, Wrapper, Section, SectionText}