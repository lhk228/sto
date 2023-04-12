import React, { useState, useEffect } from 'react';
import { Progress} from 'antd';
import { Container, Main, Title, Note, Wraper, Text, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
export const array = [];
const Step5 = () => {
console.log(Progress);
  
  const navigate = useNavigate()
  const onClick =()=> {
    navigate('/pricing-home');
    console.log(array.splice(0));
  }
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setIsChecked2(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setIsChecked3(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      setIsChecked4(true);
    }, 4000);


    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  return (
    <Container>
      <Main>
        <Title>성공</Title>
        <div className="skill-box">
                <div className="skill-bar">
                    <span className="skill-per ">
                        <span className="tooltip">100%</span>
                    </span>
                </div>
            </div>
            <Note>5 / 5</Note>
            <Wraper>
              <input
              className='spinner' 
              type="checkbox" 
              id="my-checkbox"
              checked={isChecked}
              
              />
              <label className='label' htmlFor="my-checkbox">
                <div className="check"></div>
              </label>
              <Text>Content</Text>
            </Wraper>
            <Wraper>
              <input
              className='spinner' 
              type="checkbox" 
              id="my-checkbox"
              checked={isChecked2}
              
              />
              <label className='label' htmlFor="my-checkbox">
                <div className="check"></div>
              </label>
              <Text>Content</Text>
            </Wraper>
            <Wraper>
              <input
              className='spinner' 
              type="checkbox" 
              id="my-checkbox"
              checked={isChecked3}
              
              />
              <label className='label' htmlFor="my-checkbox">
                <div className="check"></div>
              </label>
              <Text>Content</Text>
            </Wraper>
            <Wraper>
              <input
              className='spinner' 
              type="checkbox" 
              id="my-checkbox"
              checked={isChecked4}
              
              />
              <label className='label' htmlFor="my-checkbox">
                <div className="check"></div>
              </label>
              <Text>Content</Text>
            </Wraper>
            


        <Title>완성되었다!</Title>
          
          <Button onClick={onClick} type={'step'}>결제 페이지로 가기</Button>
      </Main>
    </Container>
  )
}

export default Step5
