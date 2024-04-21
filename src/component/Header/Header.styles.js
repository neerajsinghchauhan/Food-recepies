import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 400px; 
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px; // Adjust height for smaller screens
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; // Adjust font size for smaller screens
  }
`;