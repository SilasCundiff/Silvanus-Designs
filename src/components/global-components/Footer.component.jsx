import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: transparent;

  * {
    color: #fafafa;
  }
  .credits,
  .creator,
  .socials-bar,
  .splitter {
    margin: 10px;
  }
  .credits,
  .creator,
  .splitter {
    font-size: 0.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  .socials-bar {
    & i {
      font-size: 0.8rem;
      padding: 6px;
    }
  }
  @media screen and (max-width: 1639px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: 0;
    width: 300px;
    .credits,
    .creator,
    .socials-bar,
    .splitter {
      margin: 0;
    }
    .credits,
    .creator,
    .splitter {
      font-size: 0.5rem;
    }
    .socials-bar {
      & i {
        font-size: 0.8rem;
        padding: 0 8px;
      }
    }
    .splitter {
      display: none;
    }
  }
  @media screen and (max-width: 1279px) {
    z-index: 1;
    background-color: #fafafa;

    * {
      transition: color 0.5s;
      color: ${(props) => props.theme.colors.primary};
    }
    .credits,
    .creator,
    .socials-bar {
      margin: 8px 16px;
    }
    .credits,
    .creator {
      font-size: 0.5rem;
    }
    .socials-bar {
      & i {
        padding: 0 12px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .credits,
    .creator,
    .socials-bar {
      margin: 8px 16px;
    }
    .credits,
    .creator {
      font-size: 2rem;
    }
    .socials-bar {
      & i {
        font-size: 3rem;
        padding: 12px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .credits,
    .creator,
    .socials-bar {
      margin: 8px 16px;
    }
    .credits,
    .creator {
      font-size: 2rem;
      text-align: right;
    }
    .socials-bar {
      & i {
        font-size: 3rem;
        padding: 1rem 2rem;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .credits,
    .creator,
    .socials-bar {
      margin: 8px 16px;
    }
    .credits,
    .creator {
      font-size: 2rem;
      text-align: right;
    }
    .socials-bar {
      & i {
        font-size: 3rem;
        padding: 1rem 2rem;
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className='socials-bar'>
        <i className='fab fa-linkedin'></i>
        <i className='fas fa-envelope-square'></i>
        <i className='fab fa-github-square'></i>
      </div>
      <div className='splitter'>/</div>
      <span className='credits'>Video by Taryn Elliott from Pexels</span>
      <div className='splitter'>/</div>
      <span className='creator'>Designed &amp; Developed by Silas Cundiff</span>
    </StyledFooter>
  );
}

export default Footer;
