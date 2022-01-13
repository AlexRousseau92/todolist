// == Import
import React from 'react';
import { v4 as uuid } from 'uuid';
import Form from '../Form';
import Counter from '../Counter';
import List from '../List';
import './styles.css';

class App extends React.Component {
state = {
  inputText: '',
  taskList: [],

}

componentDidMount() {
  const backUpString = localStorage.getItem('data');
  if (backUpString) {
    const backUpTask = JSON.parse(backUpString);
    this.setState({
      taskList: backUpTask,
    });
  }
}

handleInputChange = (text) => {
  this.setState({
    inputText: text,
  });
}

handleFormSubmit = () => {
  const { inputText, taskList } = this.state;

  if (!inputText) return;

  const newList = {
    id: uuid(),
    label: inputText,
    done: false,
  };

  const newTaskList = [newList, ...taskList];

  const backUpString = JSON.stringify(newTaskList);
  localStorage.setItem('data', backUpString);
  this.setState({
    taskList: newTaskList,
    inputText: '',
  });
}

onTaskClick = (taskClick) => {
  const { taskList } = this.state;

  const newTask = taskList.map((taskListOriginal) => {
    if (taskListOriginal.id === taskClick.id) {
      return {
        ...taskListOriginal,
        done: !taskListOriginal.done,
      };
    }
    return taskListOriginal;
  });
  this.setState({
    taskList: newTask,
  });
}

getCounter = () => {
  const { taskList } = this.state;
  const taskNotDoneList = taskList.filter((task) => task.done === false);
  return taskNotDoneList.length;
}

getTaskOrdered = () => {
  const { taskList } = this.state;
  const notDone = taskList.filter((task) => !task.done);
  const done = taskList.filter((task) => task.done);
  return [...notDone, ...done];
}

render() {
  const { inputText } = this.state;
  return (
    <div className="app">
      <Form
        inputText={inputText}
        onInputChange={this.handleInputChange}
        onFormSubmit={this.handleFormSubmit}
      />
      <Counter counter={this.getCounter()} />
      <List
        data={this.getTaskOrdered()}
        onTaskClick={this.onTaskClick}
      />
    </div>
  );
}
}

// == Export
export default App;
