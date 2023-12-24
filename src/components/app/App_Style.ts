import styled from "styled-components";

const App = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;

  @media screen and (max-width: 990px) {
    grid-template-columns: auto 1fr;
    padding-left: 15px;
  }
  @media ${({theme}) => theme.media.mobile} {
    grid-template-columns: auto;
    padding-bottom: 80px;
    padding-right: 15px;
  }
`;

export const S = {
    App,
};