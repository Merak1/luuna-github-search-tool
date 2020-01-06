import React, { Component } from "react";
import { Home } from "../styled/Components";
class HomeComponent extends Component {
  render() {
    return (
      <Home>
        <div>
          <p>
            Develop an application that uses the Github API for searching users
            and repositories. The application must have 2 routes: user search
            and repositories search with the corresponding navigation. These
            routes must have a search bar and the search results must appear on
            the same page.
          </p>

          <p>🐋</p>
        </div>
      </Home>
    );
  }
}
export default HomeComponent;
