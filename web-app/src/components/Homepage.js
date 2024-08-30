import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Welcome to the App</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Create Account</button>
      </Link>
    </div>
  );
}

export default HomePage;
