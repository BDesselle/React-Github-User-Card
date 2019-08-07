import React from "react";
import { Card, Header } from "semantic-ui-react";
import FollowerCard from "./FollowerCard";

const FollowerGroup = props => {
  return (
    <div>
      <Header as="h1" textAlign="center">
        Followers
      </Header>
      <Card.Group centered itemsPerRow={5}>
        {props.data.map(follower => {
          return <FollowerCard data={follower} />;
        })}
      </Card.Group>
    </div>
  );
};

export default FollowerGroup;
