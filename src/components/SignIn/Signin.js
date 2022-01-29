import './style.css';

const SignIn = () => {
  return (
    <section className="sign-container">
      <form>
        <fieldset>
          <legend>Sign In</legend>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email: email@example.com"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your email"
            />
          </div>
          <label>
            <input type="checkbox" id="remember-me" name="remember-me" />
            Remember me
          </label>
        </fieldset>
        <div>
          <input type="submit" value="Sign in" />
        </div>
        <div>
          <a href="#">Sign up</a>
          <a href="#">Forgot your password?</a>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
