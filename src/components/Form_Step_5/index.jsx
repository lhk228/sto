import React, { useState, useEffect } from 'react';
import { Container, Main, Title, Note, Wraper, Text, } from './style';
import { useNavigate } from 'react-router-dom';
import { Bottom, Top } from '../Generic/transform';
export const array = [];
const Step5 = () => {
  
  const navigate = useNavigate()
  
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
    const timer5 = setTimeout(()=>{
      navigate('/pricing-home')
    }, 4500)


    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [navigate]);
  return (
    <Container>
      <Top/>
      <Bottom/>
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
          
      </Main>
    </Container>
  )
}

export default Step5
