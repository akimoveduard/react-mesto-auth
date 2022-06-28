import React from 'react';
import { Link } from 'react-router-dom';
import SignForm from './SignForm';

function Register({ onRegistration }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (email && password) {
      onRegistration({ email, password });
    }
  }

  return (
    <SignForm
      onSubmit={handleSubmit}
      name='register'
      title='Регистрация'
      buttonCaption='Зарегистрироваться'
      afterformMarkup={(
        <p className="signform__text">Уже зарегистрированы? <Link className="signform__link" to="/sign-in">Войти</Link></p>
      )}
    >
      <input
        className="signform__input"
        type="email"
        name="email"
        required
        placeholder="Email"
        aria-label="Электронная почта"
        autoComplete="off"
        onChange={handleChangeEmail}
      />
      <input
        className="signform__input"
        type="password"
        name="password"
        required
        placeholder="Пароль"
        aria-label="Пароль"
        autoComplete="off"
        onChange={handleChangePassword}
      />
    </SignForm>
  );
}

export default Register;