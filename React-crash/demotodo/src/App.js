import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
      };

      this.setState((prevState) => ({
        list: [...prevState.list, newItem],
        newItem: "",
      }));
    }
  }

  deleteItem(id) {
    const updatedList = this.state.list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  markAsDone(id) {
    this.deleteItem(id); // Removes item when checkbox is clicked
  }

  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="logo" fillColor="white" />
        <h1 className="app-title">Demo To-do</h1>

        <div className="container">
          <p>Add an Item...</p>
          <input
            type="text"
            className="input-text"
            placeholder="Write a task"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Task
          </button>
        </div>

        <div className="list">
          <ul>
            {this.state.list.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => this.markAsDone(item.id)}
                />
                {item.value}
                <button
                  className="delete-btn"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
