import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container} from './style';

const Navbar = () => {
  

  return (
    <Container>   
      <Outlet/>
    </Container>
  )
}

export default Navbar;
