import AppDispatcher from './AppDispatcher';

import TodoActionTypes from './TodoActionTypes';

// Faking the creation of items. Have a global counter for item numbers and
// create the item ID and item title from that.
let lastItemNr = 0;
function getNewItem() {
  lastItemNr++;
  const item = {
    id: lastItemNr,
    title: 'To-Do Item #' + lastItemNr
  };
  return item;
};

const TodoAction = {
  // The load item action simulates loading all existing items from the
  // backend at startup. Instead of loading the items from the backend,
  // it creates a set of items right here.
  loadItems: () => {
    for (let i = 1; i < 4; i++) {
      const item = getNewItem();
      AppDispatcher.dispatch({
        actionType: TodoActionTypes.TODO_ADD,
        item
      });
    }
  },

  // The add item action simulates adding a new item to the system.
  // Instead of asking for the item details and saving everything to
  // the backend, it makes it all up here.
  addItem: () => {
    const item = getNewItem();
    AppDispatcher.dispatch({
      actionType: TodoActionTypes.TODO_ADD,
      item
    });
  },

  // Select (or de-select if already selected) a specific item.
  selectItem: (nr) => {
    AppDispatcher.dispatch({
      actionType: TodoActionTypes.TODO_SELECT,
      nr: nr
    });
  }
};

export default TodoAction;
