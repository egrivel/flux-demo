import React from 'react';

import TodoPage from './TodoPage';

// The whole application just renders a to-do page component.
class App extends React.Component {
  render() {
    return (
      <TodoPage title="Flux Demo"/>
    );
  }
};

export default App;
