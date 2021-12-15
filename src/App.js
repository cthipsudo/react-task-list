import { Component } from "react";
import uniqid from "uniqid";

import Overview from "./components/Overview";

import "./App.css";

class App extends Component {
  state = {
    taskList: [],
    task: {
      text: '',
      id: uniqid()
    },
  };

  addToList = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, prevState.task],
      task : {
        text: '',
        id: uniqid(),
      }
    }));
  };

  updateValue = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Task App</h1>
        <form onSubmit={this.addToList}>
          <input
            type="text"
            name="task-list"
            value={this.state.task.text}
            onChange={this.updateValue}
          />
          <input type="submit" value="submit" />
        </form>
        <Overview arr={this.state.taskList} />
      </div>
    );
  }
}

export default App;
