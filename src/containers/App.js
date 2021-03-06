import React, { Component } from "react";
import classes from "./App.css";
import Persons from ".././components/Persons/Persons";
import Cockpit from ".././components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props); // Executes constructor of component being extended (Component in this case)
    console.log("AppJS Constructor");
  }

  state = {
    persons: [
      {
        id: "1",
        name: "Max",
        age: 28
      },
      {
        id: "2",
        name: "Manu",
        age: 29
      },
      {
        id: "3",
        name: "Stephanie",
        age: 26
      }
    ],
    otherState: "some other value",
    showPersons: false,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("AppJS Get Derived State From Props", props);
    return state; // Return the updated state
  }

  componentDidMount() {
    console.log("App.js ComponentDidMount run");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] ComponentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // spread operation --> makes copy of object from props
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]; // spread operator again --> to copy object from state
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      // If using old state to modify new state, do it like this
      return {
        persons: persons,
        changeCounter: prevState + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; // New array with objects from old array (copy)
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHanlder = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHanlder
          }}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
