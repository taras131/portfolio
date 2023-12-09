import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border: none;
  padding-left: 12px;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;