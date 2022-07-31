import React from 'react'
import { useNavigate } from 'react-router-dom';
import Results from './Results';
import './styles.css';

const Search = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goEnter = () => {
      navigate('/enter');
  };

  return (
    <div className="body">
      <h1>Search</h1>
        <div className='nav'>
          <button onClick={goHome}>Home</button>
          <button onClick={goEnter}>Enter</button>
        </div>
        <Results/>
    </div>
  )
};
export default Search;