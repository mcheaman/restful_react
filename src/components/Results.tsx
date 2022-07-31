import React from 'react';
import './styles.css';
import Person from './Person';
const Results = () => {
    const getAll = (): Person[]  => {
        //make api call
        //sample objects
        const samples = [
            {
                firstName: 'Mason',
                lastName: 'Heaman',
                occupation: 'SWE',
                age: '21'
            },
            {
                firstName: 'Nicole',
                lastName: 'Lynch',
                occupation: 'Nail Tech',
                age: '21'
            }
        ];
        return samples;
    }
  return (
    <div>
        <h2 className='result_header'>Results</h2>
        <ul className='result_container'>
            {getAll().map(person => {
                return(
                    <li className='result'>{`${person.firstName} ${person.lastName}, ${person.age}, ${person.occupation}`}</li>
            )})}
        </ul>
    </div>
  )
}

export default Results