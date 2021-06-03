import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: -70px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  background-color: transparent;
  background: ${(props) => props.theme.colors.primary};
  transition: bottom 0.5s;
  text-shadow: 3px 3px 3px rgba(20, 20, 20, 0.6);
  &:hover {
    bottom: 0;
    .fa-chevron-up {
      opacity: 0;
    }
  }
  * {
    color: #fafafa;
  }
  .fa-chevron-up {
    font-size: 2.4rem;
    position: absolute;
    top: 0;
    left: 50%;
    animation: ${pulse} 2s infinite;
    transition: opacity 1s;
  }

  .credits,
  .creator,
  .socials-bar,
  .splitter {
    margin: 1.4rem;
  }
  .credits,
  .creator,
  .splitter {
    font-size: calc(1.2rem + 1vw);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    & a {
      font-size: calc(1.2rem + 1vw);
      font-family: 'Pacifico', serif;
      margin: 0 0.6rem;
    }
  }
  .socials-bar {
    & i {
      font-size: 4rem;
      padding: 6px;
    }
  }
  @media screen and (max-width: 1279px) {
    z-index: 1;
    background-color: #fafafa;
    bottom: 0;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: 0;
    width: 300px;
    text-shadow: none;
    * {
      transition: color 0.5s;
      color: ${(props) => props.theme.colors.primary};
    }
    .fa-chevron-up {
      display: none;
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
    .splitter {
      display: none;
    }
  }

  @media screen and (max-width: 1279px) {
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
  @media screen and (max-width: 768px) {
    .credits,
    .creator,
    .socials-bar {
      margin: 8px 16px;
    }
    .credits,
    .creator {
      font-size: calc(1rem + 1vw);
    }
    .socials-bar {
      & i {
        font-size: calc(1rem + 3vw);
        padding: 12px;
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

function Footer({ page }) {
  const [author, setAuthor] = useState({ Author: '', url: '' });

  useEffect(() => {
    // const { page } = props;
    if (page.pathname === '/') {
      setAuthor({
        Author: 'Taryn Elliott',
        url: 'https://www.pexels.com/@taryn-elliott?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels',
      });
    } else if (page.pathname === '/about') {
      setAuthor({
        Author: 'Jonathan Fahrny',
        url: 'https://pixabay.com/users/jon2306-3513303/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=9584',
      });
    } else if (page.pathname === '/projects') {
      setAuthor({
        Author: 'Zaid Pro',
        url: 'https://pixabay.com/users/zaidoopro-10396895/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=58310',
      });
    } else if (page.pathname === '/contact') {
      setAuthor({
        Author: 'Joe Hackney',
        url: 'https://pixabay.com/users/josephphackney-15024843/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=61992',
      });
    }
  }, [page]);
  return (
    <StyledFooter>
      <i className='fas fa-chevron-up'></i>
      <div className='socials-bar'>
        <a href='https://www.linkedin.com/in/silascundiff/'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='mailto:silvanusdesigns@gmail.com'>
          <i className='fas fa-envelope-square'></i>
        </a>
        <a href='https://github.com/SilasCundiff'>
          <i className='fab fa-github-square'></i>
        </a>
      </div>
      <div className='splitter'>/</div>
      <span className='credits'>
        Video by <a href={author.url}>{author.Author}</a> from Pexels
      </span>
      <div className='splitter'>/</div>
      <span className='creator'>Designed &amp; Developed by Silas Cundiff</span>
    </StyledFooter>
  );
}

export default Footer;
