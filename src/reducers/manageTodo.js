let id = 0;

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    // case "DELETE_TODO":
    //   id--;
    //   let index = state.todos.findIndex(x => x.id === action.id)
    //   return {...state, todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]}
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.id !== action.id);
      return  { todos }
    default:
      return state;
  }
};
