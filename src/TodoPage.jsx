/**
 * Sample page for a very basic to-do list.
 *
 * This sample page uses the Flux architecture to maintain the number of
 * to-do items on the page, and renders an unordered list of all the items.
 * The page gets the number of items from the to-do store, and registers
 * itself to listen to that store when it changes. In the very basic sample,
 * the only possible change is a change in the number of items by adding
 * an item.
 *
 * Item addition works by clicking on a button, which will trigger an
 * action which dispatches the addition to the to-do store. The store will
 * add the new item and update itself, emiting a change event to which this
 * component listens.
 */

import React from 'react';

import TodoAction from './TodoAction';
import TodoStore from './TodoStore';
import TodoItem from './TodoItem';

class TodoPage extends React.Component {
  // Provide a default value for this.state.nr_items
  constructor(props) {
    super(props);
    this.state = {
      nr_items: TodoStore.getNrItems()
    };
  }

  // Needs to be implemented for each component that listens to change
  // events from stores. When the store that this component listens to
  // changes, the state is updated with the current information from the
  // store. This will trigger React to re-render the component.
  _getStateFromStores() {
    this.setState({
      nr_items: TodoStore.getNrItems()
    });
  }

  // Standard React lifecycle function.
  // Boilerplate (copy-and-paste or superclass implementation) to make sure
  // that the component is registered to receive change events from the
  // todo store.
  componentDidMount() {
    this._registeredCb = this._getStateFromStores.bind(this);
    TodoStore.registerListener(this._registeredCb);
  }

  // Standard React lifecycle function.
  // Boilerplate (copy-and-paste or superclass implementation) to make sure
  // that the component is unregistered from receiving change events from the
  // todo store.
  componentWillUnmount() {
    TodoStore.unregisterListener(this._registeredCb);
  }

  // On click handler kicks off the action
  _onButtonClick() {
    TodoAction.addItem();
  }

  // React render function
  render() {
    const items = [];
    const {nr_items} = this.state;

    // Build the array of items, including the necessary key attribute
    for (let i = 0; i < nr_items; i++) {
      items.push(<TodoItem key={'item-' + i} nr={i}/>);
    }

    // Render the entire page
    return (
      <div className='page'>
        <h1>{this.props.title}</h1>
        <p>
          This page renders a list of to-do items and provides for the
          ability to add a to-do item.
        </p>
        <ul>
          {items}
        </ul>
        <p>
          <input
            type="button"
            value="Add Item"
            onClick={this._onButtonClick}
          />
        </p>
      </div>
    );
  }
};

export default TodoPage;
