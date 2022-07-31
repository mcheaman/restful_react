import React, {useState} from 'react';
import './styles.css';
import Person from './Person';
import axios from 'axios';
// const axios = require('axios').default;

interface Props {
    people: Person[];
}

const Results: React.FC<Props> = ({people}) => {
  return (
    <div>
        <h2 className='result_header'>Results</h2>
        {/* <button onClick={() => getAll()}>Refresh</button> */}
        <div className='result_container'>
            {people.map((person, index) => {
                return(
                    <span className='result' key={index}>{`${person.firstName} ${person.lastName}, ${person.age}, ${person.occupation}`}</span>
            )})}
        </div>
    </div>
  )
}

export default Results;