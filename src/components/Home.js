import React, { Component } from "react";
import SearchUser from "./SearchUser";
import SearchRepos from "./SearchRepos";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class Home extends Component {
  componentDidMount() {
    // this.props.requestApiData();
  }
  componentDidUpdate() {}

  render() {
    return (
      // <div>
      //   <p>Home component </p>
      //   <SearchUser />
      //   <SearchRepos />
      // </div>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SearchUser">SearchUser</Link>
            </li>
            <li>
              <Link to="/SearchRepos">SearchRepos</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/SearchUser">
              <SearchUser />
            </Route>
            <Route path="/SearchRepos">
              <SearchRepos />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
