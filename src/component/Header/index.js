import React from 'react';
import { Wrapper, Title } from './Header.styles.js';
import FoodImage from '../Images/Food_image.jpg'; 

const Header = () => (
  <Wrapper image={FoodImage}>
    <Title>Your Restaurant Name</Title> 
  </Wrapper>
);

export default Header;