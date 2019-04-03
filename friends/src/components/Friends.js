import React from "react";
import styled from "styled-components";

const FriendsContainerStyle = styled.div`
  border: 1px solid black;
  margin: 20px auto;
  width: 500px;
`;

function Friends(props) {
  return (
    <div className="friends-container">
      {props.friends.map(friend => {
        return (
          <FriendsContainerStyle>
            <h2>{friend.id}</h2>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </FriendsContainerStyle>
        );
      })}
    </div>
  );
}

export default Friends;
