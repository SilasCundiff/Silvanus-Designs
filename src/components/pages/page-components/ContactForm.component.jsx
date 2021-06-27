import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: auto;
  padding: 3rem;
  background-color: rgba(20, 20, 20, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  & h2 {
    font-family: 'Pacifico', cursive;
    font-size: calc(1rem + 2vw);
    color: ${(props) => props.theme.colors.tertiary};
    text-shadow: 3px 3px 10px rgba(20, 20, 20, 0.6);
  }
  & .fieldsContainer {
    /* height: 90%; */
    /* width: 90%; */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & .contactField {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      & label {
        font-size: calc(1rem + 1vw);
        font-weight: 700;
        color: ${(props) => props.theme.colors.tertiary};
        margin-bottom: 0.5rem;
        text-shadow: 3px 3px 10px rgba(20, 20, 20, 0.4);
      }
      & input {
        font-size: calc(1rem + 0.8vw);
        color: ${(props) => props.theme.colors.primary};
        border: none;
      }
      & textarea {
        resize: none;
        height: 14vh;
        margin-bottom: 2rem;
      }
      & textarea,
      & input {
        border-radius: 5px;
        box-shadow: 3px 3px 10px rgba(20, 20, 20, 0.6);
        &:active,
        &:focus {
          outline: solid ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }

  & .contactButton {
    margin: 0 auto;
    & button {
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 5px;
      border: none;
      color: ${(props) => props.theme.colors.tertiary};
      text-align: center;
      font-size: calc(1rem + 1.6vw);
      text-transform: uppercase;
      padding: 0.5rem 4rem;
      cursor: pointer;

      /* width: 50%; */
      /* position: absolute;
      bottom: -3%;
      left: 50%; */
      /* transform: translateX(-50%); */
      box-shadow: 5px 5px 10px rgba(20, 20, 20, 0.8);
      &:active,
      &:focus {
        outline: solid ${(props) => props.theme.colors.tertiary};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex: 1 1 100%;
    min-width: 90%;
    margin: 4rem auto 8rem;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Send me a message!</h2>
      <div className='fieldsContainer'>
        <div className='contactField nameField'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='contactField emailField'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='contactField messageField'>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='contactButton'>
        <button type='submit'>Submit</button>
      </div>
    </Form>
  );
}
