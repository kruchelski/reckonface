import { useState } from 'react';
import { register } from '../../services/httpService';
import './style.css';

const Register = ({ onRouteChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submited, setSubmited] = useState(false);

  const validateName = (value = name) => {
    const errors = {
      required: 'Name is required',
    };
    let errorBuilder = '';
    if (!value) {
      errorBuilder += `${errors.required}\n`;
    }
    return errorBuilder;
  };

  const validateEmail = (value = email) => {
    const errors = {
      required: 'Email is required',
      regex: 'Enter a correct email (example: email@example.com)',
    };
    let errorBuilder = '';
    if (!value) {
      errorBuilder += `${errors.required}\n`;
    }

    if (!value.match(/^[\w]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errorBuilder += errors.regex;
    }
    return errorBuilder;
  };

  const validatePassword = (value = password) => {
    const errors = {
      required: 'Password is required',
      minLenght: 'The password must have at lease 4 characters',
    };
    let errorBuilder = '';
    if (!value) {
      errorBuilder += `${errors.required}\n`;
    }

    if (value.length < 4) {
      errorBuilder += errors.minLenght;
    }
    return errorBuilder;
  };

  const handleNameInput = (name) => {
    name = name.trim();
    setName(name);
    if (!submited) return;
    const nameError = validateName(name);
    setNameError(nameError);
  };

  const handleEmailInput = (email) => {
    email = email.trim();
    setEmail(email);
    if (!submited) return;
    const emailError = validateEmail(email);
    setEmailError(emailError);
  };

  const handlePasswordInput = (password) => {
    setPassword(password);
    if (!submited) return;
    const passwordError = validatePassword(password);
    setPasswordError(passwordError);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmited(true);
    setNameError('');
    setEmailError('');
    setPasswordError('');
    const nameError = validateName();
    setNameError(nameError);
    const emailError = validateEmail();
    setEmailError(emailError);
    const passwordError = validatePassword();
    setPasswordError(passwordError);
    if (nameError || emailError || passwordError) return;
    try {
      const res = await register({ name, email, password });
      onRouteChange(event.target, 'home', res.user);
    } catch (err) {
      const msg = err.message || err.error || 'Unexpected error signing in';
      console.log(msg);
    }
  };

  return (
    <section className="sign">
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sign__title">Register</legend>
          <div className="sign__input-container">
            <label className="sign__label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className={`sign__input ${
                !!nameError ? 'sign__input--error' : ''
              }`}
              name="name"
              type="text"
              placeholder="Enter your name"
              onInput={(event) => handleNameInput(event.target.value)}
            />
            <span className="sign__error">{nameError}</span>
          </div>
          <div className="sign__input-container">
            <label className="sign__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={`sign__input ${
                !!emailError ? 'sign__input--error' : ''
              }`}
              name="email"
              type="email"
              placeholder="Enter your email: email@example.com"
              onInput={(event) => handleEmailInput(event.target.value)}
            />
            <span className="sign__error">{emailError}</span>
          </div>
          <div className="sign__input-container">
            <label className="sign__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className={`sign__input ${
                !!passwordError ? 'sign__input--error' : ''
              }`}
              name="password"
              type="password"
              placeholder="Enter your password"
              onInput={(event) => handlePasswordInput(event.target.value)}
            />
            <span className="sign__error">{passwordError}</span>
          </div>
          <div className="sign__button-container">
            <input
              className="sign__button"
              type="submit"
              value="Create account"
            />
          </div>
        </fieldset>
        <div className="sign__links-container">
          <p
            onClick={(event) => onRouteChange(event.target, 'signin')}
            className="sign__link"
          >
            Have an account? Sign in!
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
