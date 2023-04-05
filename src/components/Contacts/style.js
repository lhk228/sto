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
  max-width: 400px;
  width: 100%;
  padding: 20px 0;
  `;

const Title = styled.p`
  font-size: 16px;
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
`;
const Img = styled.img`
cursor: pointer;
`;

export {Container, Main, Iconbox, Img, Title, Text}