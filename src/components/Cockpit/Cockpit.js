import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.bold); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1> Hi, I 'm a React App</h1> 
            <p className={btnClass}> This is really working! </p>
            <button onClick={props.clicked}>
            Switch Name
            </button>
        </div>
    );
};

export default Cockpit;