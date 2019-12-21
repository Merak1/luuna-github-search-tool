import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestRepo } from "../actions";
import { RepoFolder, Input, Button } from "../styled/Components";

class SearchUser extends Component {
  state = {
    input: ""
  };
  componentDidMount() {
    console.log(this.props.repos, "props.repo from didmount");
  }
  componentDidUpdate() {
    console.log(this.props.repos, "props.repo from didupdate");
  }
  Value = e => {
    const value = e.target.value;
    value.length === 0
      ? this.setState(() => ({ input: [] }))
      : this.setState({ input: value });
    return value;
  };
  repo = (repo, i) => (
    <div className="repo" key={repo.id}>
      {console.log(repo)}
      <p>repo </p>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>

      {/* <img src={repo.picture.medium} /> */}
    </div>
  );
  render() {
    const repos = this.props.repos;
    return (
      <RepoFolder>
        <Input onChange={this.Value} type="text" />
        <Button
          onClick={() => {
            this.props.requestRepo(this.state.input);
          }}
        >
          buscar
        </Button>
        {Object.entries(repos).length === 0 ? (
          <div>
            <h3>no hay repos </h3>
          </div>
        ) : (
          <div className="test-repo">{repos.map(this.repo)}</div>
        )}
      </RepoFolder>
    );
  }
}
const mapStateToProps = state => ({ repos: state.repo });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestRepo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
