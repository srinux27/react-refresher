import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons:[
      {name: 'Saba', age:28, contactNumber: 9000143684, key:1}, 
      {name: 'Emmanual', age:28, contactNumber: 9898012345, key:2},
      {name: 'Shiva', age:35, contactNumber: 8548512345, key:3},
      {name: 'Roberto', age:35, contactNumber: 8745612458, key:4}
    ],
    showPersons:true
  }
   
  togglePersonsHandler = () => {
    let showPerson = this.state.showPersons;
    this.setState({showPersons:!showPerson});
  }

  deleteHandler = (key) => {
    let index = this.state.persons.findIndex(element=>(element.key === key))
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    
    this.setState({persons:persons});
  }

  updateNameHandler = (event, key) => {
    let index = this.state.persons.findIndex(element=>(element.key === key))
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;

    this.setState({
      persons:persons
    })

  }

  render() {
    return (
        <div className={classes.App}>
          <Cockpit 
          personsList={this.state.persons} 
          personDeleteHandler = {this.deleteHandler}
          personUpdateNameHandler = {this.updateNameHandler}
          showPersons ={this.state.showPersons}
          togglePersonsHandler = {this.togglePersonsHandler}>
          </Cockpit>
        </div>
    );
  }
}

export default App;
