import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Friends from "./components/Friends";
import styled from "styled-components";

const FormStyle = styled.div`
  border: 1px solid black;
  width: 500px;
  margin: 0 auto;
  button {
    margin: 20px;
    width: 100px;
    height: 40px;
    background: lawngreen;
    border-radius: 10px;
    &:hover {
      background: green;
    }
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addPost = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.age || !this.state.email) {
      console.log("Error, must fill all 3 input fields");
    } else {
      let newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      };
      axios
        .post("http://localhost:5000/friends", newFriend)
        .then(res => {
          console.log(res.data);
          this.setState({ friends: res.data, name: "", age: "", email: "" });
        })
        .catch(err => console.log(err));
    }
  };

  deletePost = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  editPost = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <FormStyle>
          <form onSubmit={this.addPost}>
            <h2>Name:</h2>
            <input
              type="text"
              placeholder="Enter name..."
              name="name"
              onChange={this.inputHandler}
              value={this.state.name}
            />
            <h2>Age:</h2>
            <input
              type="text"
              placeholder="Enter age..."
              name="age"
              onChange={this.inputHandler}
              value={this.state.age}
            />
            <h2>Email:</h2>
            <input
              type="text"
              placeholder="Enter email..."
              name="email"
              onChange={this.inputHandler}
              value={this.state.email}
            />
            <div>
              <button type="submit">Add Person</button>
            </div>
          </form>
        </FormStyle>

        <Route
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              editPost={this.editPost}
              deletePost={this.deletePost}
              inputHandler={this.inputHandler}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
