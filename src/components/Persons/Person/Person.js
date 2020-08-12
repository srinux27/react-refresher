import React from 'react';
import classes from './Person.css'


const Person =(props) => {
    let personClass = classes.Person;
    
    if (props.personListLength < 3) {
        personClass = classes.Person + ' ' + classes.listDanger;
    } 

    return (
    <div className={personClass}>
        <p>Person Name: {props.name}</p>
        <p>Person Age: {props.age}</p>
        <p>Person Contact Number: {props.contactNumber}</p>
        <p><label for="changeName"><strong>Update Name:</strong></label><input name="changeName" type="text" placeholder={props.name} onChange={(event)=>{props.personUpdateNameHandler(event, props.personKey)}}></input></p>
        <button className={classes.button} onClick={() => props.personDeleteHandler(props.personKey)}>Delete Me!</button>
    </div>);
}

export default Person;