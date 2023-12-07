import React, {FC} from 'react';
import {TRecommendation} from "../models/TRecommendations";
import styled from "styled-components";
import {Rating} from "./Rating";
import {AvatarWithNameAndRole} from "./AvatarWithNameAndRole";

type TProps = {
    recommendation: TRecommendation
}

export const RecommendationsListItem: FC<TProps> = ({recommendation}) => {
    return (
        <Wrapper>
            <Rating rating={recommendation.rating}/>
            <h3>{recommendation.title}</h3>
            <p>{recommendation.description}</p>
            <AvatarWithNameAndRole author={recommendation.author}/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 310px;
  height: 323px;
  flex-shrink: 0;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 25px;

  & h3 {
    margin-top: 16px;
  }

  & p {
    margin-top: 18px;
  }
`

