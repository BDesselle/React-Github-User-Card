import React from "react";
import { Image, Item, Segment, Grid } from "semantic-ui-react";

const UserCard = props => {
  return (
    <Segment rounded>
      <Grid centered columns={1}>
        <Grid.Column>
          <Image rounded size="small" centered src={props.data.avatar_url} />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Item>
            <Item.Content>
              <Item.Header as="h1">
                Hello, my name is {props.data.name}.
              </Item.Header>
              <Item.Meta>
                <span>Location: {props.data.location}</span>
              </Item.Meta>
              <br />
              <Item.Description>{props.data.bio}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default UserCard;
