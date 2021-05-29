import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: ${(props) =>
    props.customStyle
      ? props.customStyle.backgroundColor
      : 'rgba(25, 25, 25, 0.3)'};

  color: rgba(240, 240, 240, 1);
  border: solid rgba(240, 240, 240, 1) 4px;
  backdrop-filter: blur(30px);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 49%;

  & .buttonText {
    font-size: calc(1rem + 2vw);
    font-weight: bold;
    text-transform: uppercase;
    padding: 2rem 3rem;
  }
`;

function Button({ url, to, innerText, customStyle, customClass }) {
  return (
    <StyledButton customStyle={customStyle}>
      {to ? (
        <Link
          className={`buttonText ${customClass ? customClass : ''}`}
          to={to}
        >
          {innerText}
        </Link>
      ) : (
        <a
          className={`buttonText ${customClass ? customClass : ''}`}
          href={url}
        >
          {innerText}
        </a>
      )}
    </StyledButton>
  );
}

export default Button;
