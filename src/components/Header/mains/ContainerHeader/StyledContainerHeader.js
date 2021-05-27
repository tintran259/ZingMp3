import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1c1c1c;
  width: 100%;
  height: 50px;
  position: ${(props) => (props.isShow ? "fixed" : "absolute")};
  z-index: 200;
`;
