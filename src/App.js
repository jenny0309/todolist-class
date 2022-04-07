import React, { Component } from 'react';
import Navbar from './components/Navbar';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Cavin',
      todoItems: [
        { action: 'Buy Milk', done: false },
        { action: 'Dentist at 5px', done: false },
        { action: 'Go to Gym', done: false },
      ],
      newToDo: '',
    };
  }

  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === 'Name1' ? 'Name2' : 'Name1',
  //   });
  // };

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Navbar name={this.state.userName} />

          <div className='col-12'>
            <input
              type='text'
              className='form-control'
              value={this.state.newToDo}
              onChange={(e) => this.setState({ newToDo: e.target.value })}
            />
            <button
              className='btn btn-primary'
              onClick={() =>
                this.setState({
                  todoItems: [
                    ...this.state.todoItems,
                    { action: this.state.newToDo, done: false },
                  ],
                  newToDo: '',
                })
              }
            >
              Add
            </button>
          </div>

          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todoItems.map((item) => (
                  <tr key={item.action}>
                    <td>{item.action}</td>
                    <td>
                      <input
                        type='checkbox'
                        checked={item.done}
                        onChange={() => this.toggleDone(item)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
