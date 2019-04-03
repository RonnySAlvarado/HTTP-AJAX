import React from "react";
import styled from "styled-components";

const FriendsContainerStyle = styled.div`
  border: 1px solid black;
  margin: 20px auto;
  width: 500px;
  .edit-button {
    width: 80px;
    height: 40px;
    &:hover {
      background: darkgray;
    }
  }
  .delete-button {
    margin-left: 20px;
    width: 80px;
    height: 40px;
    background: indianred;
    &:hover {
      background: red;
    }
  }
`;

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

class EachFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  editHandlerTrue = () => {
    this.setState({ edit: true });
  };

  editHandlerFalse = id => {
    this.setState({ edit: false });
    this.props.editPost(id);
  };

  render() {
    if (this.state.edit === false) {
      return (
        <FriendsContainerStyle>
          <h2>{this.props.friend.id}</h2>
          <p>{this.props.friend.name}</p>
          <p>{this.props.friend.age}</p>
          <p>{this.props.friend.email}</p>
          <div className="button-container">
            <button className="edit-button" onClick={this.editHandlerTrue}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => this.props.deletePost(this.props.friend.id)}
            >
              Delete
            </button>
          </div>
        </FriendsContainerStyle>
      );
    } else {
      return (
        <FormStyle>
          <form onSubmit={() => this.editHandlerFalse(this.props.friend.id)}>
            <h2>Name:</h2>
            <input
              type="text"
              placeholder="Enter name..."
              name="name"
              onChange={this.props.inputHandler}
              value={this.props.name}
            />
            <h2>Age:</h2>
            <input
              type="text"
              placeholder="Enter age..."
              name="age"
              onChange={this.props.inputHandler}
              value={this.props.age}
            />
            <h2>Email:</h2>
            <input
              type="text"
              placeholder="Enter email..."
              name="email"
              onChange={this.props.inputHandler}
              value={this.props.email}
            />
            <div>
              <button type="submit">Finish Edit</button>
            </div>
          </form>
        </FormStyle>
      );
    }
  }
}

export default EachFriend;
