import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm';

class App extends Component {
  state = {
    tasks: []
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
  render() {
    return (
      <div className="container" id="root">
          <TaskForm onSubmit={this.addTask}/>
          <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}
export default App;
