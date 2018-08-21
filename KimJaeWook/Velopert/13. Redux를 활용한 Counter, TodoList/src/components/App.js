import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import CounterContainer from 'containers/CounterContainer';
import TodosContainer from 'containers/TodosContainer';
//import Counter from './Counter';
//import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<TodosContainer />}
      />
    );
  }
}

export default App;
