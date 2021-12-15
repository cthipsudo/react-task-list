import { Component } from "react";
import Overview from "./components/Overview";

import "./App.css";

class App extends Component {
  state = {
    taskList: ["Apple"],
    value: "",
  };

  addToList = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, prevState.value],
      value: '',
    }));
  };

  updateValue = (e) => {
    this.setState({
      value: e.target.value,
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
            value={this.state.value}
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
