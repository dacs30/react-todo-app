import React, {Component} from 'react';
import Todo from './Todo';
import Input from './Input';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      task: ''
    }
  }

  
  render() {
    const deleteTask = (task, event) => {
      event.preventDefault();
      console.log(`deleted ${task}`)
      this.setState({tasks: this.state.tasks.filter(item => {
        return item !== task
      })})
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.task);
      if(this.state.task !== ''){
        this.state.tasks.push(this.state.task);
        this.setState({
          tasks: this.state.tasks
        })
        this.setState({ // set the input field to empty again
          task: ''
      })
      const textField = document.querySelector('#standard-basic');
      textField.value = '';
      textField.focus();
      }
    }

    const handleChange = (event) => {
      this.setState({
          task: event.target.value
      })
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <Todo tasks={this.state.tasks} deleteTask={deleteTask}/>
        <Input handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={this.state.task}/>
      </header>
    </div>
  )};
}

export default App;
