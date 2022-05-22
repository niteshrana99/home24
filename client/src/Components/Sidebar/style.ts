import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled("div")`
`;

export const SidebarHeading = styled("h3")`
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  padding: 0px 18px;
  text-decoration: none;
  color: black;
  width: 173px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`;

export const ListItem = styled("li")`
  color: black;

  &:hover {
    background-color: gray;
    ${StyledLink} {
      color: white;
    }
  }

  &.active {
    background-color: #009688;

    ${StyledLink} {
      color: white;
    }
  }
`;
