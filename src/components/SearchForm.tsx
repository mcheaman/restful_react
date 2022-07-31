import React, {useState, FormEvent} from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Person from './Person'

interface Props {
    people: Person[];
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
}

const SearchForm:React.FC<Props> = ({ people, setPeople})  => {
    const [term, setTerm] = useState('');
    const [search, setSearch] = useState('');
    
    const terms = [
        {label: 'First Name', value: 'firstName'},
        {label: 'Last Name', value: 'lastName'},
        {label: 'Occupation', value: 'occupation'},
        {label: 'Age', value: 'age'},
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(term === ''){
            alert('choose a term to search');
            return;
        }
        axios.get('http://localhost:1337/api/people', {
            params: {
              term,
              search,
            }
          })
        .then(response => {
            setPeople(response.data.people)
        })
        .catch(err => {
            alert(err.toString)
        })
        console.log(term, search);
    }
    return (
        <form className='result_container' onSubmit={(e) => handleSubmit(e)}>
            <Select className="dropdown select" options={ terms } onChange={(term) => setTerm(term ? term.value: '')}/>
            <input className="dropdown" type= "text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button className="dropdown" type='submit'>Search</button>
        </form>
      )
}

export default SearchForm;