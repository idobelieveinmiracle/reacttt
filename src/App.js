import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Watch fucking TV',
        completed: false
      },
      {
        id: 3,
        title: 'LOL',
        completed: false
      }
    ]
  };

  // toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id == id) {
        todo.completed = ! todo.completed;
      }
      return todo;
    })});
  }

  // delete item
  deleteItem = (id) => {
    this.setState({todos: this.state.todos.filter(todo =>{
      return todo.id != id;
    })});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} deleteItem={this.deleteItem} markComplete={this.markComplete}/>
      </div>
    );
  };
}

export default App;
