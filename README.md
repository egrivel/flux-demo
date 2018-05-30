# Flux Demo

This program is intended as a demonstration of the Flux state management in
a React application. The code in this program is solely designed towards
demonstrating the Flux principles and is in no way production-ready. Feel
free to use it as inspiration, though.

The program displays a list of "to-do" items. At startup it has a hard-coded
list of three items. It supports two very basic dynamic behaviors:
 - Clicking on a to-do item will select or unselect it (only a single item
   can be selected at any time).
 - Additional items can be added to the list using a button.

There is no provision for deleting items or doing anything with the selected
item.

The Flux architecture is implemented through a `TodoActions.js` action file
and a `TodoStore.js` store file. The action file has functions for the two
actions (`addItem` and `selectItem`). The store maintains the state in the
form or an array of to-do items and the ID of the currently selected item
(if any).

The program consists of the following JSX view components:
 - App.jsx: wrapper for the entire application.
 - TodoPage.jsx: wrapper for the to-do page. This component displays the list
   for to-do items. It also supports adding items to the list.
 - TodoItem.jsx: display a single to-do item. This component also deals with
   the selection and unselection of a particular item.

The Flux dispatcher is wrapped in the `AppDispatcher.js` for convenience.
The mechanism to allow view components to subscribe to store changes is
coded out in the store and the components for clarity (in a real
implementation, this functionality would be abstracted).

The infrastructure is provided through `webpack` and `babel`. This module
does not currently have linting configured and does not include any
unit tests.

### Usage

To install this program, execute the following commands in a terminal window:
```
git clone https://github.com/egrivel/flux-demo.git
cd flux-demo
npm install
```

To run the program, execute the following in a terminal window:
```
npm start
```
and then point your browser to `http://localhost:8080`.

