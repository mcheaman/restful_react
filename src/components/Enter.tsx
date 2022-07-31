import React from 'react';
import { useNavigate } from 'react-router-dom';
import EnterForm from './EnterForm';
import './styles.css';

const Enter = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goSearch = () => {
      navigate('/search');
  };

  return (
    <div className="body">
      <h1>Enter</h1>
      <div className='nav'>
        <button onClick={goHome}>Home</button>
        <button onClick={goSearch}>Search</button>
      </div>
      <EnterForm/>
    </div>
  )
};
export default Enter;