import React, {FC} from 'react';
import {TRecommendation} from "../../models/TRecommendations";
import styled from "styled-components";
import {Rating} from "../../components/Rating";
import {AvatarWithNameAndRole} from "../../components/AvatarWithNameAndRole";

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

const Wrapper = styled.div`
  min-width: 310px;
  min-height: 323px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 25px;

  h3 {
    margin-top: 15px;
  }

  p {
    margin-top: 18px;
    margin-bottom: 30px;
  }
`;


