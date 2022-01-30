import './style.css';

const SignIn = () => {
  return (
    <section className="sign">
      <form>
        <fieldset>
          <legend className="sign__title">Sign In</legend>
          <div className="sign__input-container">
            <label className="sign__label" for="email">
              Email
            </label>
            <input
              id="email"
              className="sign__input"
              name="email"
              type="email"
              placeholder="Enter your email: email@example.com"
            />
          </div>
          <div className="sign__input-container">
            <label className="sign__label" for="password">
              Password
            </label>
            <input
              id="password"
              className="sign__input"
              name="password"
              type="password"
              placeholder="Enter your email"
            />
          </div>
          <label className="sign__checkbox-label">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="sign__checkbox"
            />
            <span>Remember me</span>
          </label>
        </fieldset>
        <div className="sign__button-container">
          <input className="sign__button" type="submit" value="Sign in" />
        </div>
        <div className="sign__links-container">
          <a className="sign__link" href="#">
            Sign up
          </a>
          <a className="sign__link" href="#">
            Forgot your password?
          </a>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
