import AppDispatcher from './AppDispatcher';

import TodoActionTypes from './TodoActionTypes';

const TodoAction = {
  addItem: () => {
    AppDispatcher.dispatch({
      actionType: TodoActionTypes.TODO_ADD
    });
  },

  selectItem: (nr) => {
    AppDispatcher.dispatch({
      actionType: TodoActionTypes.TODO_SELECT,
      nr: nr
    });
  }
};

export default TodoAction;
