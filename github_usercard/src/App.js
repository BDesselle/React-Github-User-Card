import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Segment, Header, Icon } from "semantic-ui-react";
import UserCard from "./components/UserCard";
import FollowerGroup from "./components/FollowerGroup";
/* import Nav from "./components/Header"; */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "BDesselle",
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchFollowerData();
  }

  fetchUserData = () => {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        return res.json();
      })
      .then(res => this.setState({ user: res }))
      .catch(err => {
        console.log("Issue Occured While Fetching User Data", err);
      });
  };

  fetchFollowerData = () => {
    fetch(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        return res.json();
      })
      .then(res => this.setState({ followers: res }))
      .catch(err => {
        console.log("user follower issue", err);
      });
  };

  render() {
    console.log("State Sanity Check", this.state);
    return (
      <div className="App">
        <Segment raised>
          <Header textAlign="center" as="h1" icon>
            <Icon bordered inverted color="purple" name="github" />
          </Header>
          <UserCard data={this.state.user} />
          <FollowerGroup data={this.state.followers} />
        </Segment>
      </div>
    );
  }
}

export default App;
