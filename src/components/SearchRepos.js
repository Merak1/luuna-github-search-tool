import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestRepo } from "../actions";
import { RepoFolder, Input, Button, Repo } from "../styled/Components";
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

  repo = (repo, i) => (
    <Repo className="repo column" key={repo.id}>
      <a href={repo.html_url}>
        <h1>{repo.name}</h1>
      </a>
      <p> [ {repo.language} ] </p>
      <p>{repo.description}</p>
    </Repo>
  );
  render() {
    const repos = this.props.repos;
    return (
      <RepoFolder>
        <div className="columns">
          <div className="column">
            <Input onChange={this.Value} type="text" />
            <Button
              onClick={() => {
                this.props.requestRepo(this.state.input);
              }}
            >
              buscar
            </Button>
          </div>
        </div>
        {Object.entries(repos).length === 0 ? (
          <div>
            <h3>busca un repositorio por nombre </h3>
          </div>
        ) : (
          <div className="test-repo">{repos.map(this.repo)}</div>
        )}
      </RepoFolder>
    );
  }
}
const mapStateToProps = state => ({
  repos: state.repo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestRepo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
