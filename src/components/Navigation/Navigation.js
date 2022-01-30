import './style.css';

function Navigation({ onRouteChange }) {
  const handleSignOut = (event) => {
    onRouteChange(event.target, 'signin');
  };

  return (
    <nav className="navigation-container">
      <p onClick={handleSignOut} className="navigation-container__item">
        Sign out
      </p>
    </nav>
  );
}

export default Navigation;
