/**
 * Simple todo item. This item expects to be part of an unordered list. It will
 * render itself as a list item. The parent passes in the item number through
 * the props. The item interacts with the store to get the item information.
 * It also interacts with the action to mark the item as selected or not,
 * and gets the item selection state from the store.
 *
 * This component can be enhanced by also having the item title maitained
 * in the state, and having it updated when the store changes. This
 * enhancement allows for dynamic titles. The current implementation is
 * simple and works as long as item titles do not change.
 *
 * In a real application, some item ID would be used instead of the item
 * number. Using an ID instead of a nunber will make it possible to also
 * delete items.
 */

import React from 'react';

import TodoAction from './TodoAction';
import TodoStore from './TodoStore';

class TodoItem extends React.Component {
  // Provide a default value for this.state.selected
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  // Needs to be implemented for each component that listens to change
  // events from stores. When the store that this component listens to
  // changes, the state is updated with the current information from the
  // store. This will trigger React to re-render the component.
  _getStateFromStores() {
    this.setState({
      selected: TodoStore.isSelected(this.props.nr)
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
  _onClick() {
    TodoAction.selectItem(this.props.nr);
  }

  // React render function
  render() {
    const {nr} = this.props;
    const title = TodoStore.getItem(nr).title;

    const selected = TodoStore.isSelected(nr) ? ' ***' : '';

    return (
      <li onClick={this._onClick.bind(this)}>{title + selected}</li>
    );
  }
};

export default TodoItem;
