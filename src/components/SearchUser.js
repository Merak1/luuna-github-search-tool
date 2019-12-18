import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestUser } from "../actions";

class SearchUser extends Component {
  state = {
    input: ""
  };
  componentDidMount() {
    console.log(this.props.user);
  }
  componentDidUpdate() {
    console.log(this.props.user);
  }
  Value = e => {
    const value = e.target.value;
    value.length === 0
      ? this.setState(() => ({ input: [] }))
      : this.setState({ input: value });
    return value;
  };

  render() {
    const user = this.props.user;

    return (
      <div>
        <p>Search User</p>
        <input onChange={this.Value} type="text" />
        <button
          onClick={() => {
            this.props.requestUser(this.state.input);
          }}
        >
          buscar
        </button>
        {Object.entries(user).length === 0 ? (
          <div>
            <h3>no hay user </h3>
          </div>
        ) : (
          <div className="test-user">
            <div className="user" key={user.id}>
              {console.log(user)}
              <h1>{user.name}</h1>
              <h1>{user.blog}</h1>
              <h1>{user.location}</h1>

              <img src={user.avatar_url} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUser);
