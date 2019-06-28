import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TasksForm from './components/TasksForm';
import { toDos } from './toDos.json';
// console.log(toDos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos
    };   
    this.handleToDos = this.handleToDos.bind(this);
  }
  handleToDos(toDo) {
    this.setState({
      toDos: [...this.state.toDos, toDo]
    });
  }
  removeToDo(index){
    // console.log(index);
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        toDos: this.state.toDos.filter((e, i) => {
          return i !== index
        })
      });
    }
  }
  render(){
    const toDos = this.state.toDos.map((toDo, i) => {
      return (
        <div className="col-md-4 col-12 mt-5">
              <div className="card">
                <div className="card-header">
                  <h3>{ toDo.title }</h3>
                  <span className="badge badge-pill badge-danger ml-2">
                    { toDo.priority }
                  </span>
                </div>
                <div className="card-body">
                  <p>{ toDo.description }</p>
                  <p>{ toDo.responsible }</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-danger" onClick={this.removeToDo.bind(this, i)}>
                    Delete
                  </button>
                </div>
              </div>
          </div>
      );
    });
  return (
    <div className="App">
      <header className="App-header">

      <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">
              Tasks 
              <span className="badge badge-pill badge-light ml-2">
                { this.state.toDos.length }
              </span>
          </a>
        </nav>    

        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 mt-5">
              <TasksForm onAddToDo={this.handleToDos}></TasksForm>
            </div>
            { toDos }
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}
}

export default App;
