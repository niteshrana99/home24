import styled from "@emotion/styled";

export const LoaderWrapper = styled("div")`
  width: 100%;
  height: 100vh;
`;

export const Loader = styled("div")`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
