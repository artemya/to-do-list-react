import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ToDoList from './components/ToDoList'
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  

  componentDidMount() {
    fetch('http://localhost:5000/api/taskitems/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ tasks: data })
      })
      .catch(console.log)
  }

  postTask(task) {
    fetch('http://localhost:5000/api/taskitems/', {
      method:'post',
      headers:  {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(response => response.json())
  }

  addTask = (task) => {
    console.log(task)
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    this.postTask(task)
    // console.log(this.state.tasks)
  }
  patchMethod (id ,isComplete) {
    fetch('http://localhost:5000/api/taskitems/' + id, {
      method: 'PATCH',
      headers: {
          'Content-type': 'application/json' 
      },
      body: JSON.stringify({ isComplete: isComplete })
      }
    )
  }
    


  handleClick(id, event) {
    // this.targetId();
    console.log('По ссылке кликнули.', id, event.target.checked)
    this.patchMethod(id, event.target.checked)
  }
  render() {
    return (
      <div className="container" id="root">
          <TaskForm onSubmit={this.addTask}/>
          <ToDoList  tasks={this.state.tasks} handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default App;
