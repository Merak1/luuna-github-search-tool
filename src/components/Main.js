import React, { Component } from "react";
import SearchUser from "./SearchUser";
import SearchRepos from "./SearchRepos";
import HomeComponent from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  MenuUl,
  UlContainer,
  IlContainer,
  Container
} from "../styled/Components";
import Link from "../styled/Link";

class Main extends Component {
  componentDidMount() {
    // this.props.requestApiData();
  }
  componentDidUpdate() {}

  render() {
    return (
      <Router>
        <Container>
          <UlContainer>
            <MenuUl>
              {/* <li>
                <IlContainer>
                  <Link backgroundcolor="#91b2ef82" to="/">
                    Main
                  </Link>
                </IlContainer>
              </li> */}
              <li>
                <IlContainer>
                  <Link backgroundcolor="#f9f195" to="/SearchUser">
                    SearchUser
                  </Link>
                </IlContainer>
              </li>
              <li>
                <IlContainer>
                  <Link backgroundcolor="#77ef8b82" to="/SearchRepos">
                    SearchRepos
                  </Link>
                </IlContainer>
              </li>
            </MenuUl>
          </UlContainer>

          <Switch>
            {/* <Route exact path="/">
              <HomeComponent />
            </Route> */}
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
