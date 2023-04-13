import styled, { keyframes } from 'styled-components';
const expand = keyframes`
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
`;
const Top = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  transform: translateY(-50%);
  animation: ${expand} 1s ease-out forwards;
  z-index: 1;
`;
const Bottom = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  transform: translateY(-50%);
  animation: ${expand} 1s ease-out forwards;
  z-index: 1;
`;

export { Top, Bottom}