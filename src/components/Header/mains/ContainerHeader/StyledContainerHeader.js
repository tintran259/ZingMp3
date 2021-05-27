import styled from "styled-components";

export const StyledHeader = styled.header`
  position: ${(props) => (props.isShow ? "fixed" : "absolute")};
  background-color: #1c1c1c;
  width: 100%;
  height: 50px;
  z-index: 200;
`;
