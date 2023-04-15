import React from 'react';
import {  Container,  Main,  Title,} from './style';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text1 = `
  111111111111111111111111111111111S
`;

const text2 = `
  text2
`;

const text3 = `
  text3lkefhsldkfjh
`;

const text4 = `
  text4
`;

const text5 = `
  text5
`;

const text6 = `
  hi
`;

const text7 = `
  text7
`;

const text8 = `
  text8
`;

const text9 = `
  text9
`;
const QuestionsPage = () => {
    
  
    return (
    <Container>
      <Main>
        <Title>자주 묻는 질문 :</Title>
        <Collapse style={{width: '95%', fontSize: '1rem'}} accordion>
          <Panel header="업데이트 비용을 지불해야 합니까?" key="1">
            <p>{text1}</p>
          </Panel>
          <Panel header="내 퍼널은 안전한가요?" key="2">
            <p>{text2}</p>
          </Panel>
          <Panel header="계약 기간은 얼마나 됩니까?" key="3">
            <p>{text3}</p>
          </Panel>
          <Panel header="질문이 있는 경우 이야기할 수 있는 사람이 있습니까?" key="4">
            <p>{text4}</p>
          </Panel>
          <Panel header="ClickFunnels 계정을 취소하면 데이터가 손실되나요?" key="5">
            <p>{text5}</p>
          </Panel>
          <Panel header="즐겨찾는 자동 응답기/장바구니를 ClickFunnels에 통합할 수 있습니까?" key="6">
            <p>{text6}</p>
          </Panel>
          <Panel header="설치해야 하는 것이 있습니까?" key="7">
            <p>{text7}</p>
          </Panel>
          <Panel header="짐을 감당할 수 있습니까?" key="8">
            <p>{text8}</p>
          </Panel>
          <Panel header="누가 데이터/컨텐츠/구독자를 소유합니까?" key="9">
            <p>{text9}</p>
          </Panel>

        </Collapse>
        
      </Main> 
      
      
    </Container>
    

  )
}

export default QuestionsPage;

