import styled from "@emotion/styled";

interface StyledComponentProps {
  size: string;
  disabled: boolean;
}

export const StyledButton = styled("button")<StyledComponentProps>`
  font-size: ${(props) => (props.size === "small" ? "14px" : "16px")};
  background-color: ${(props) => props.theme.brand.yellowOrange};
  color: ${(props) => props.theme.brand.white};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline:none;

  &:hover {
    background-color: ${(props) => props.theme.brand.yellowOrangeDark};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const StyledIconButton = styled('button')`
  background-color: transparent;
  padding: 0;
  border:none ;
  cursor: pointer;
  position:relative;
  outline:none;
`;