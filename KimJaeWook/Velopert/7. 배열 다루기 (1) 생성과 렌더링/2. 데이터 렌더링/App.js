import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  //해당 값을 생략하고 배열의 크기룰 id로 설정함
  id = 2;

  state = {
    information: [
      {
        id :    0,
        name:   '김재욱',
        phone:  '010-0000-0000',
      },
      {
        id :    1,
        name:   '황광은',
        phone:  '010-0000-0001',
      }
    ]
  }

  handleCreate = (data) =>{
    console.log(this.id++);
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++, ...data})
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
