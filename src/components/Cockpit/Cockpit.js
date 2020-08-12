import React from 'react';
import classes from './Cockpit.css'
import logo from '../../assets/logo.svg'
import Persons from '../../components/Persons/Persons'

const Cockpit = (props) => {
    let personsDispComponent = null;
    
    if (props.showPersons) {
      personsDispComponent = <Persons 
      personsList={props.personsList} 
      personDeleteHandler={props.personDeleteHandler}
      personUpdateNameHandler={props.personUpdateNameHandler}>
    </Persons>
    }


    return (
        <div>
            <header className={classes.Cockpitheader}>
                <img src={logo} className={classes.Cockpitlogo} alt="logo" />
                <h1 className={classes.Cockpittitle}>Welcome to React</h1>
            </header>
            <p>
            <button className={classes.button} onClick={props.togglePersonsHandler}>Toggle Persons Display!</button>
            </p>
            {personsDispComponent}
        </div>
    )
}

export default Cockpit;