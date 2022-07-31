import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Results from './Results';
import SearchForm from './SearchForm';
import Person from './Person';
import './styles.css';

const Search = () => {
  const [people, setPeople] = useState<Person[]>([])

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
        <SearchForm people={people} setPeople={setPeople}/>
        <Results people={people}/>
    </div>
  )
};
export default Search;