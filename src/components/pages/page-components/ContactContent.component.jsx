import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm.component';
import Button from '../../global-components/Button.component';
const ContentWrap = styled.div`
  width: 100%;
  height: 95%;
  align-self: flex-end;
  display: flex;
  align-content: center;
  gap: 2rem 2rem;
  margin: auto auto 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  & .contactInfoContainer {
    flex: 1 1 25%;
    max-width: 30%;
    height: 70%;
    margin: auto 0 auto auto;
    backdrop-filter: blur(15px);
    border-radius: 5px;
    background-color: rgba(20, 20, 20, 0.2);
    backdrop-filter: blur(15px);
    color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    position: relative;
    & h2 {
      font-family: 'Pacifico', cursive;
      font-size: calc(0.6rem + 3vw);
      color: ${(props) => props.theme.colors.secondary};
      text-shadow: 3px 3px 10px rgba(20, 20, 20, 0.6);
      position: absolute;
      line-height: 20%;
      top: -3%;
      left: 0%;
      width: 300%;
    }

    & .wrapper {
      margin: auto;
      width: 95%;
      height: 95%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      & .contact-item {
        & .contact-item-link {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        & span {
          font-size: calc(0.6rem + 1.2vw);
          font-weight: 400;
        }
        & i {
          font-size: calc(1rem + 1.8vw);
          margin-right: 2rem;
        }
      }
      & .resume-link {
        & * {
          margin: auto;

          width: 100%;
          font-size: 2.4rem;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    /* background-color: red; */
    flex-direction: column;

    & .contactInfoContainer {
      min-width: 60%;
      min-height: 40%;
      margin: 4vh auto auto;
      & h2 {
        font-size: calc(0.6rem + 4vw);
      }

      & .wrapper {
        width: 80%;

        & .contact-item {
          & span {
            font-size: calc(0.6rem + 2.2vw);
          }
          & i {
            font-size: calc(1rem + 2.8vw);
            margin-right: 3rem;
          }
        }
        & .resume-link {
          & * {
            font-size: 3.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    /* background-color: red; */
    flex-direction: column;

    & .contactInfoContainer {
      min-width: 60%;
      min-height: 40%;
      margin: 4vh auto auto;
      & h2 {
        font-size: calc(0.6rem + 4vw);
      }

      & .wrapper {
        & .contact-item {
          & span {
            font-size: calc(0.6rem + 1.8vw);
          }
          & i {
            font-size: calc(1rem + 1.9vw);
            margin-right: 3rem;
          }
        }
        & .resume-link {
          & * {
            font-size: 2.4rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: 85%;
    flex-direction: column;
    & .contactInfoContainer {
      min-width: 90%;
      min-height: 60%;

      & h2 {
        font-size: calc(0.6rem + 6vw);
        left: 5%;
      }

      & .wrapper {
        & .contact-item {
          & span {
            font-size: calc(0.6rem + 2.8vw);
          }
          & i {
            font-size: calc(1rem + 2.9vw);
            margin-right: 3rem;
          }
        }
        & .resume-link {
          & * {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    /* background-color: red; */
    flex-direction: column;

    & .contactInfoContainer {
      min-width: 90%;
      min-height: 60%;
      margin: 6vh auto auto;
      & h2 {
        font-size: calc(0.6rem + 8vw);
        left: 5%;
      }

      & .wrapper {
        width: 95%;
        & .contact-item {
          & span {
            font-size: calc(0.6rem + 2.8vw);
          }
          & i {
            font-size: calc(1rem + 2.9vw);
            margin-right: 2rem;
          }
        }
        & .resume-link {
          & * {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;

function ContactContent() {
  return (
    <ContentWrap>
      <div className='contactInfoContainer'>
        <h2>Ways to contact me</h2>
        <div className='wrapper'>
          <div className='contact-item'>
            <a href='/' className='contact-item-link'>
              <i className='fas fas fa-phone-square'></i>
              <span>678-557-2630</span>
            </a>
          </div>
          <div className='contact-item'>
            <a href='/' className='contact-item-link'>
              <i className='fas fa-envelope-square'></i>
              <span>SilvanusDesigns@gmail.com</span>
            </a>
          </div>
          <div className='contact-item'>
            <a href='/' className='contact-item-link'>
              <i className='fab fa-github-square'></i>
              <span>github.com/SilasCundiff</span>
            </a>
          </div>
          <div className='contact-item'>
            <a href='/' className='contact-item-link'>
              <i className='fab fa-linkedin'></i>
              <span>linkedin.com/in/silascundiff/</span>
            </a>
          </div>
          <div className='contact-item resume-link'>
            <Button
              url='#'
              innerText='Resume'
              customClass='resume-link-button'
            />
          </div>
        </div>
      </div>
      <ContactForm />
    </ContentWrap>
  );
}

export default ContactContent;
