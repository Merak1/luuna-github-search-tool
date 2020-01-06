import React, { Component } from "react";
import SearchUser from "./SearchUser";
import SearchRepos from "./SearchRepos";
import HomeComponent from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MenuUl, UlContainer, Container } from "../styled/Components";
import Link from "../styled/Link";

class Main extends Component {
  render() {
    return (
      <Router>
        <Container>
          <UlContainer>
            <MenuUl>
              <li>
                <Link to="/SearchUser">SearchUser</Link>
              </li>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/SearchRepos">SearchRepos</Link>
              </li>
            </MenuUl>
          </UlContainer>

          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route exact path="/SearchUser">
              <SearchUser />
            </Route>
            <Route path="/SearchRepos">
              <SearchRepos />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default Main;
