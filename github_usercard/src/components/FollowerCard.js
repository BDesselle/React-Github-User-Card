import React from "react";
import { Card, Image } from "semantic-ui-react";

const FollowerCard = props => {
  return (
    <Card href={props.data.html_url}>
      <Image src={props.data.avatar_url} />
      <Card.Content>
        <Card.Header>{props.data.login}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default FollowerCard;
