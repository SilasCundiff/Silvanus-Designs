import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: rgba(20, 20, 20, 0.3);
  border-radius: 30px;
  border: none;
  color: rgba(240, 240, 240, 1);
  backdrop-filter: blur(30px);
  text-align: center;
  margin-top: 2rem;
  flex: 0 1 25%;
  & .buttonText {
    display: block;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif !important;
    font-size: calc(1rem + 2vw);
    text-transform: uppercase;
    padding: 0.5rem 4rem;
  }
`;

function Button({ url, to, innerText }) {
  return (
    <StyledButton>
      {to ? (
        <Link className='buttonText' to={to}>
          {innerText}
        </Link>
      ) : (
        <a className='buttonText' href={url}>
          {innerText}
        </a>
      )}
    </StyledButton>
  );
}

export default Button;
