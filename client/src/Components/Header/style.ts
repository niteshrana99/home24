import styled from "@emotion/styled";

export const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled("img")`
  width: 7%;
  cursor: pointer;
`;

export const HeaderRightLinksContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;

export const IconConatiner = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 4px;
`;

export const ItemsCounter = styled("span")`
  display: flex;
  width: 16px;
  height: 16px;
  background: red;
  border-radius: 50%;
  position: absolute;
  font-size: 12px;
  top: -18%;
  right: 5.5%;
  color: ${props => props.theme.brand.white};
  text-align: center;
  padding: 1px;
  align-items: center;
  justify-content: center;
`;
