import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestUser } from "../actions";
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

  Value = e => {
    const value = e.target.value;
    value.length === 0
      ? this.setState(() => ({ input: [] }))
      : this.setState({ input: value });
    return value;
  };
  follower = (follower, i) => (
    <div className="follower" key={follower.id}>
      <p>follower </p>
    </div>
  );
  render() {
    const user = this.props.user;
    return (
      <UserFolder>
        <div className="columns">
          <div className="column">
            <Input onChange={this.Value} type="text" />
            <Button
              onClick={() => {
                this.props.requestUser(this.state.input);
              }}
            >
              buscar
            </Button>
          </div>
        </div>
        {Object.entries(user).length === 0 ? (
          <div>
            <h3>busca un usuario por nombre </h3>
          </div>
        ) : (
          <div>
            <User className="user " key={user.id}>
              <div className="primera">
                <h1>{user.name}</h1>
                <UserImage src={user.avatar_url} />
              </div>
              <div className="segunda">
                <p>{user.blog}</p>
                <p>{user.location}</p>
                <p>{user.company}</p>
              </div>
            </User>
          </div>
        )}
      </UserFolder>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
