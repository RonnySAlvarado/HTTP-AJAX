import React from "react";
import EachFriend from "./EachFriend";

function Friends(props) {
  return (
    <div className="friends-container">
      {props.friends.map(friend => {
        return (
          <EachFriend
            friend={friend}
            editPost={props.editPost}
            deletePost={props.deletePost}
            inputHandler={props.inputHandler}
            name={props.name}
            age={props.age}
            email={props.email}
          />
        );
      })}
    </div>
  );
}
export default Friends;
