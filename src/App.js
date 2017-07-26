import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppIntro from './AppIntro';
import ToDoList from './ToDoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader message = "To Do Ta Da" />
        <AppIntro />
        <ToDoList />
      </div>
    );
  }
}

export default App;
