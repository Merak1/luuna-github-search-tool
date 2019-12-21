import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1em 1.2em;
  with: 3em;
  background-color: ${props => props.backgroundcolor};
`;
