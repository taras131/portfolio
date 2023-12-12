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
            <Description>{recommendation.description}</Description>
            <AvatarWithNameAndRole author={recommendation.author}/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 310px;
  height: 323px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 25px;

  & h3 {
    margin-top: 15px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }
`

const Description = styled.p`
  margin-top: 18px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.textSecondary};
`

