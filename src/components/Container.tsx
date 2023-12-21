import styled from "styled-components";

export const Container = styled.div`
  width: 970px;
  @media screen and (max-width: 1440px) {
    width: calc(100vw - 468px);
  }
  @media screen and (max-width: 990px) {
    width: calc(100vw - 143px);
  }
  @media ${({theme}) => theme.media.mobile} {
    width: calc(100vw - 30px);
  }
`;

