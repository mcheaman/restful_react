import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();

  const goEnter = () => {
      navigate('/enter');
  };
  const goSearch = () => {
      navigate('/search');
  };
  return (
  <div className="body">
    <h1>Home</h1>
      <div className='nav'>
        <button onClick={goEnter}>Enter</button>
        <button onClick={goSearch}>Search</button>
      </div>
  </div>
  );
};

export default Home;