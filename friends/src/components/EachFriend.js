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
      edit: false,
      currentName: "",
      currentAge: "",
      currentEmail: ""
    };
  }

  componentDidMount() {
    this.setState({
      currentName: this.props.friend.name,
      currentAge: this.props.friend.age,
      currentEmail: this.props.friend.email
    });
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editHandlerTrue = () => {
    this.setState({ edit: true });
  };

  editHandlerFalse = (id, name, age, email) => {
    this.props.editPost(id, name, age, email);
    this.setState({ edit: false });
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
          <form
            onSubmit={() =>
              this.editHandlerFalse(
                this.props.friend.id,
                this.state.currentName,
                this.state.currentAge,
                this.state.currentEmail
              )
            }
          >
            <h2>Name:</h2>
            <input
              type="text"
              placeholder="Enter name..."
              name="currentName"
              onChange={this.inputHandler}
              value={this.state.currentName}
            />
            <h2>Age:</h2>
            <input
              type="text"
              placeholder="Enter age..."
              name="currentAge"
              onChange={this.inputHandler}
              value={this.state.currentAge}
            />
            <h2>Email:</h2>
            <input
              type="text"
              placeholder="Enter email..."
              name="currentEmail"
              onChange={this.inputHandler}
              value={this.state.currentEmail}
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
