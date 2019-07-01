import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = AuthContext;

    useEffect(() => {
      console.log("Cockpit.js --> useEffect");
      // Http request ... this runs for every render cycle including the first one
      toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef} onClick={props.clicked}>
            Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);