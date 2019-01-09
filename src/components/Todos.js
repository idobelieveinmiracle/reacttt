import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} 
        todo={todo} deleteItem={this.props.deleteItem} 
        markComplete={this.props.markComplete}
      />
    ));
  };
}

//prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default Todos;
