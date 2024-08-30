import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

function Dashboard() {
  const [points, setPoints] = useState(() => parseInt(localStorage.getItem('points')) || 0);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      localStorage.setItem('points', points);
    }
  }, [points, user]);

  const handleWin = () => {
    const newPoints = points + 100;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints);
    navigate('/score', { state: { points: newPoints } });
  };

  const handleLose = () => {
    const newPoints = points - 50;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints);
    navigate('/score', { state: { points: newPoints } });
  };

  const handleBet = () => {
    const betResult = Math.random() < 0.5 ? 'win' : 'lose';
    if (betResult === 'win') {
      handleWin();
    } else {
      handleLose();
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('points');
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <nav>
        <h3>My App</h3>
        <div>
          <p className='user'>{user ? `Logged in as: ${user.email}` : 'Not logged in'}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </nav>
      <h2>Welcome to your Dashboard</h2>
      <p className="points-display">Points: {points}</p>
      <button onClick={handleWin}>Win</button>
      <button onClick={handleLose}>Lose</button>
      <button onClick={handleBet}>Bet</button>
    </div>
  );
}

export default Dashboard;
