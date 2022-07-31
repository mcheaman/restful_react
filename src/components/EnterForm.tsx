import { PROPERTY_TYPES } from '@babel/types';
import React, { Component } from 'react'
import Person from './Person';
import axios from 'axios';
interface Props {
    
}

interface State{
    input: Person,
}

export default class EnterForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            input: {
              firstName: '',
              lastName: '',
              occupation: '',
              age: '',
            },
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e: React.FormEvent){
        const target = e.target as HTMLInputElement;
        const name = target.name;
        this.setState({
          input: {
            ...this.state.input, 
            [name]: target.value
          }
        });
    }
    handleSubmit(e: React.FormEvent){
        e.preventDefault();
        axios.post('http://localhost:1337/api/people', this.state.input)
        .then(response => {
              console.log(response);
          })
          .catch(err => {
                alert(err.toString);
          });
            this.setState({
              input: {
                firstName: '',
                lastName: '',
                occupation: '',
                age: '',
              },
          });

        //Make Api call
    }
  render() {
    return (
        <form className="entry" onSubmit={this.handleSubmit}>
          <p>
            <label>First Name:</label>
            <input type= "text" name="firstName" value={this.state.input.firstName} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Last Name:</label>
            <input type= "text"  name="lastName" value={this.state.input.lastName} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Occupation:</label>
            <input type= "text" name="occupation"  value={this.state.input.occupation} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Age:</label>
            <input type= "text"  name="age" value={this.state.input.age} onChange={this.handleChange}></input>
          </p>
            <button type='submit'>Go</button>
        </form>
    )
  }
}
