import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm.component';

const ContentWrap = styled.div`
  width: 100%;
  height: 95%;
  align-self: flex-end;
  display: flex;
  align-content: center;
  gap: 2rem 2rem;
  flex-wrap: wrap;
  overflow-y: auto;
  & .contactInfoContainer {
    flex: 1 1 25%;
    max-width: 30%;
    height: 90%;
    margin: auto 0 auto auto;
    background-color: blue;
    padding: 1rem;
    backdrop-filter: blur(15px);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      220deg,
      rgba(108, 167, 245, 0.6),
      rgba(67, 92, 175, 0.8)
    );
  }
  @media screen and (max-width: 768px) {
    /* background-color: red; */
    flex-direction: column;
    flex-wrap: nowrap;
    & .contactInfoContainer {
      flex: 1 0 60%;
      /* max-width: 90%; */
      min-width: 90%;
      margin: 2rem auto 0;
    }
  }
  /* @media screen and(max-width: 768px) {
    flex-direction: column;
    background-color: orange;
    & .contactInfoContainer {
      flex: 1 0 100%;
      max-width: 90%;
    }
  } */
`;

function ContactContent() {
  return (
    <ContentWrap>
      <div className='contactInfoContainer'>
        <h2>Ways to contact me</h2>
        <p>
          
        </p>
        <h3>Phone</h3>
        <p>111-111-1111</p>
      </div>
      <ContactForm />
    </ContentWrap>
  );
}

export default ContactContent;
