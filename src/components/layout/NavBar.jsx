import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

export default function NavBar() {
  const { oktaAuth, authState } = useOktaAuth();
  const history = useHistory();

  const handleLogin = async () => {
    history.push('/login'); // Redirect to home after login
  };

  const handleLogout = async () => {
    oktaAuth.signOut('/'); // No need for an empty string argument
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container px-0">
        <h1 className="navbar-brand mb-1">OKTA Authentication</h1>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            {authState && authState.isAuthenticated ? (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
