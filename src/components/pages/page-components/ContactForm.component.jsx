import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 40vw;
  height: 90%;
  margin: auto 0 auto 10rem;
  padding: 1rem 6rem;
  background-color: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  font-size: 6rem;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    220deg,
    rgba(108, 167, 245, 0.6),
    rgba(67, 92, 175, 0.8)
  );

  & h2 {
    font-family: 'Pacifico', cursive;
    font-size: calc(2rem + 3vw);
    color: ${(props) => props.theme.colors.tertiary};
    text-shadow: 3px 3px 10px rgba(20, 20, 20, 0.4);
  }
  & .contactField {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    & label {
      font-size: calc(1rem + 2vw);
      font-weight: 700;
      color: ${(props) => props.theme.colors.tertiary};
      margin-bottom: 0.5rem;
      text-shadow: 3px 3px 10px rgba(20, 20, 20, 0.4);
    }
    & input {
      font-size: calc(1rem + 1.4vw);
      color: ${(props) => props.theme.colors.primary};
      border: none;
    }
    & textarea {
      resize: none;
      height: 200px;
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

  & .contactButton {
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
      width: 100%;
      box-shadow: 5px 5px 10px rgba(20, 20, 20, 0.8);
      &:active,
      &:focus {
        outline: solid ${(props) => props.theme.colors.tertiary};
      }
    }
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
      <div className='contactField nameField'>
        <label for='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='contactField emailField'>
        <label for='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='contactField messageField'>
        <label for='message'>Message:</label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className='contactButton'>
        <button type='submit'>Submit</button>
      </div>
    </Form>
  );
}
