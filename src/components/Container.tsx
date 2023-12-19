import styled from "styled-components";

export const Container = styled.div`
  max-width: 970px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;

  @media ${({theme}) => theme.media.mobile} {
    margin-left: 15px;
    margin-right: 15px;
  }
`;