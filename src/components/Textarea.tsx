import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  padding: 12px;
  min-height: 210px;
  resize: none;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;
