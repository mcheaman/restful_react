import { PROPERTY_TYPES } from '@babel/types';
import React, { Component } from 'react'


interface Props {
    
}

interface State{
    firstName: string,
    lastName: string,
    occupation?: string,
    age: string,
}

export default class EnterForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            occupation: '',
            age: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e: React.FormEvent){
        const target = e.target as HTMLInputElement;
        const name = target.name;
        this.setState({
            ...this.state, 
            [name]: target.value
        });
    }
    handleSubmit(e: React.FormEvent){
        alert('A Person was submitted ' + JSON.stringify(this.state));
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            occupation: '',
            age: '',
        });
        //Make Api call
    }
  render() {
    return (
        <form className="entry" onSubmit={this.handleSubmit}>
          <p>
            <label>First Name:</label>
            <input type= "text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Last Name:</label>
            <input type= "text"  name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Occupation:</label>
            <input type= "text" name="occupation"  value={this.state.occupation} onChange={this.handleChange}></input>
          </p>
          <p>
            <label>Age:</label>
            <input type= "text"  name="age" value={this.state.age} onChange={this.handleChange}></input>
          </p>
            <button type='submit'>Go</button>
        </form>
    )
  }
}
