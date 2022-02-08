import './style.css';

function Navigation({ onRouteChange, isSigned }) {
  const handleChangeRoute = (event, route) => {
    onRouteChange(event.target, route);
  };

  return (
    <nav className="navigation-container">
      {isSigned && (
        <p
          onClick={(event) => handleChangeRoute(event, 'signin')}
          className="navigation-container__item"
        >
          Sign out
        </p>
      )}
      {!isSigned && (
        <>
          <p
            onClick={(event) => handleChangeRoute(event, 'signin')}
            className="navigation-container__item"
          >
            Sign in
          </p>
          <p
            onClick={(event) => handleChangeRoute(event, 'register')}
            className="navigation-container__item"
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
}

export default Navigation;
