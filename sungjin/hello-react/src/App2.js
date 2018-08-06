import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App2 extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App2;
