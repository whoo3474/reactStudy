import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App2 extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민중',
        phone: '010-111-1111'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-222-2222'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const {information } = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App2;
