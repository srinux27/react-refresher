import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    const personsListLocal = [...props.personsList];
       
    return (
            <div>
                {personsListLocal.map(element => {return <Person 
                        name={element.name} 
                        age={element.age} 
                        contactNumber={element.contactNumber} 
                        personKey={element.key} 
                        personDeleteHandler={props.personDeleteHandler}
                        personUpdateNameHandler={props.personUpdateNameHandler}
                        personListLength = {props.personsList.length}>
                    </Person>})}
            </div>
        );
}

export default Persons;