import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import { timeout } from 'q';

const Cockpit = (props) => {
    useEffect(() => {
      console.log("Cockpit.js --> useEffect");
      // Http request ... this runs for every render cycle including the first one
      setTimeout(() => {
        alert("Saved data to cloud");
      }, 1000);
      return () => {
        console.log("[Cockpit.js] Cleanup work in useEffect");
      }
  }, []); // only run when the variables in the array change. Empty array == only runs for the first time, never runs again

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.bold); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1> 
            <p className={btnClass}> This is really working! </p>
            <button onClick={props.clicked}>
            Switch Name
            </button>
        </div>
    );
};

export default React.memo(Cockpit);