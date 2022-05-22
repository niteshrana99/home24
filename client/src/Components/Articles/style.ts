import styled from "@emotion/styled";

export const ArticlesWrapper = styled("div")`
  position: relative;
  grid-area: content;
  grid-column: span 2;
`;

export const CategoryHeading = styled("h1")`
    margin-bottom:16px ;
`;

export const ArticlesContainer = styled("div")`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
