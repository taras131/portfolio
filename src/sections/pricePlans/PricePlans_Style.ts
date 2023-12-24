import styled from "styled-components";
import {FlexContainer} from "../../components/FlexContainer";

const ListWrapper = styled(FlexContainer)`
  justify-content: space-between;
  @media ${({theme}) => theme.media.tablet} {
    flex-wrap: nowrap;
    overflow: auto;
  }
`;

const ListItemWrapper = styled(FlexContainer)`
  width: 310px;
  flex-grow: 1;
  min-height: 609px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 55px 30px 25px;
  position: relative;
  flex-direction: column;
  
  h3, p {
    text-align: center;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  @media ${({theme}) => theme.media.tablet} {
    flex-shrink: 0;
  }
`;

const PopularLabel = styled(FlexContainer)`
  width: 100%;
  height: 30px;
  background-color: ${({theme}) => theme.colors.accent};
  position: absolute;
  top: 0;
`;

const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.textPrimary};
  margin-bottom: 8px;

  span {
    margin-left: 10px;
  }
`;

export const S = {
    ListWrapper,
    ListItemWrapper,
    PopularLabel,
    Price,
};