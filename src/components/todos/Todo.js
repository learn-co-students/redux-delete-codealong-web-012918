import React, { Component } from 'react';

class Todo extends Component {
  handleDelete = e => {
    this.props.store.dispatch({
      type: "DELETE_TODO",
      id: this.props.id
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
};

export default Todo
