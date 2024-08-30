import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

function Score() {
  const location = useLocation();
  const { points } = location.state || { points: 0 };
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate('/dashboard');
  };

  return (
    <div className="score-page">
      <h2>Score Page</h2>
      <p>Username: {user ? user.email : 'Unknown'}</p>
      <p>Total Points: {points}</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default Score;
