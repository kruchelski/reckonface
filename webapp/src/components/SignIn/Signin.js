import { useState } from 'react';
import './style.css';

const SignIn = ({ onRouteChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submited, setSubmited] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    setEmailError('');
    setPasswordError('');
    const emailError = validateEmail();
    setEmailError(emailError);
    const passwordError = validatePassword();
    setPasswordError(passwordError);
    if (emailError || passwordError) return;
    onRouteChange(event.target, 'home');
  };

  return (
    <section className="sign">
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sign__title">Sign In</legend>
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
            <input className="sign__button" type="submit" value="Sign in" />
          </div>
        </fieldset>
        <div className="sign__links-container">
          <p
            onClick={(event) => onRouteChange(event.target, 'register')}
            className="sign__link"
          >
            Register
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
