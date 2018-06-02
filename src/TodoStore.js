/**
* This flux store provides a very basic (and very ugly) implementation of
* maintaining a list of to-do items, as well as the indicator for a
* currently selected item.
*
* Please note that a significant amount of code in this store is really
* "boilerplate" code, which would typically be implemented through a
* common superclass or object. The boilerplate is included in this example
* to show how the "magic" works.
*/

import AppDispatcher from './AppDispatcher';

import TodoActionTypes from './TodoActionTypes';

// List of items
const _items = [];

// Number of available items
let _nr_items = 0;

// Currently selected item
let _selected_item = -1;

function _addItem(item) {
  _nr_items++;
  _items.push(item);
};

// Select or deselect an item. If the requested item (by index) is the
// currently selected item, the item is deselected and no other item is
// selected. If any other items is selected, that will become the selected
// item and consequently a currently selected item becomes deselected.
function _selectItem(nr) {
  if (nr === _selected_item) {
    _selected_item = -1;
  } else {
    _selected_item = nr;
  }
}

// Boilerplate code to handle a list of call-backs that need to be
// called when something in this store changes.
const _listeners = [];
let _nr_listeners = 0;

const TodoStore = {
  // Boilerplate code to register a callback.
  registerListener: (cb) => {
    _listeners[_nr_listeners++] = cb;
  },

  // Boilerplate code to unregister a callback.
  unregisterListener: (cb) => {
    for (let i = 0; i < _nr_listeners; i++) {

     if (_listeners[i] == cb) {
        delete _listeners[i];
        _nr_listeners++;
      }
    }
  },

  // Boilerplate code to invoke all callbacks when something in the
  // store changes.
  emitChange: () => {
    for (let i = 0; i < _nr_listeners; i++) {
      _listeners[i]();
    }
  },

  getNrItems: () => {
    return _nr_items;
  },

  getItem: (nr) => {
    if ((nr >= 0) && (nr < _nr_items)) {
      return _items[nr];
    }
    return undefined;
  },

  isSelected: (nr) => {
    return nr === _selected_item;
  },

  handleDispatch: (payload) => {
    switch(payload.actionType) {
      case TodoActionTypes.TODO_ADD:
        _addItem(payload.item);
        TodoStore.emitChange();
        break;

      case TodoActionTypes.TODO_SELECT:
        _selectItem(payload.nr);
        TodoStore.emitChange();
        break;
    }
  }
};

// Boilerplate code to register this store to the dispatcher
AppDispatcher.register(TodoStore.handleDispatch);

export default TodoStore;
