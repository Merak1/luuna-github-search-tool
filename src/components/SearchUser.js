import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestUser, requestUserFollowers } from "../actions";
import {
  UserFolder,
  User,
  UserImage,
  Input,
  Button
} from "../styled/Components";

class SearchUser extends Component {
  state = {
    input: ""
  };
  componentDidMount() {
    // console.log(this.props.user);
  }
  componentDidUpdate() {
    // console.log(this.props.user);
    // console.log(this.props.userFollowers, "FOLLOWERS");
    // console.log(typeof this.props.userFollowers, "FOLLOWERS");
  }
  sendBoth = () => {
    this.props.requestUser(this.state.input);
    this.props.requestUserFollowers(this.state.input);
  };
  Value = e => {
    const value = e.target.value;
    value.length === 0
      ? this.setState(() => ({ input: [] }))
      : this.setState({ input: value });
    return value;
  };
  follower = (follower, i) => (
    <div className="follower" key={follower.id}>
      {console.log(follower)}
      <p>follower </p>

      {/* <img src={repo.picture.medium} /> */}
    </div>
  );
  render() {
    const user = this.props.user;
    const followers = this.props.userFollowers;
    // const followers = Object.assign({}, arraFfollowers);

    return (
      <User>
        <Input onChange={this.Value} type="text" />
        <Button
          // onClick={() => {
          //   this.props.requestUser(this.state.input),
          //     this.props.requestUserFollowers(this.state.input);
          // }}
          // onClick={() => {
          // this.sendBoth;
          // }}
          onClick={this.sendBoth}
        >
          buscar
        </Button>
        {Object.entries(user).length === 0 &&
        Object.entries(followers).length === 0 ? (
          <div>
            <h3>no hay user </h3>
          </div>
        ) : (
          <UserFolder>
            <div className="user" key={user.id}>
              {console.log(user)}
              <h1>{user.name}</h1>
              <UserImage src={user.avatar_url} />
              <p>{user.blog}</p>
              <p>{user.location}</p>
            </div>
            <div className="user2">
              <p>{user.company}</p>
              {console.log(followers, "followers")}
              {console.log(typeof followers, "typeoffollowers")}
              {console.log(followers[0])}
              {/* <div>{followers.map((n, index => <div>follower</div>))}</div> */}
            </div>
          </UserFolder>
        )}
      </User>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  userFollowers: state.userFollowers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUser, requestUserFollowers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
