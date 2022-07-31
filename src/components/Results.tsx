import React, {useState} from 'react';
import './styles.css';
import Person from './Person';
import axios from 'axios';
// const axios = require('axios').default;

const Results: React.FC = () => {
    const [people, setPeople] = useState<Person[]>([])
    const getAll = () => {
        //make api call
        //sample objects
        // const samples: Person[] = [
        //     {
        //         firstName: 'Mason',
        //         lastName: 'Heaman',
        //         occupation: 'SWE',
        //         age: '21'
        //     },
        //     {
        //         firstName: 'Nicole',
        //         lastName: 'Lynch',
        //         occupation: 'Nail Tech',
        //         age: '21'
        //     }
        // ];
        axios.get('localhost:1337/api/people')
            .then(response => {
                alert(response)
            })
        // setPeople(samples)
        return;
    }
  return (
    <div>
        <h2 className='result_header'>Results</h2>
        <button onClick={() => getAll()}>Refresh</button>
        <ul className='result_container'>
            {people.map(person => {
                return(
                    <li className='result'>{`${person.firstName} ${person.lastName}, ${person.age}, ${person.occupation}`}</li>
            )})}
        </ul>
    </div>
  )
}

export default Results