import React, {FC} from 'react';
import {TRecommendation} from "../models/TRecommendations";
import {RecommendationsListItem} from "./RecommendationsListItem";
import styled from "styled-components";

type TProps = {
    recommendations: TRecommendation []
}

export const RecommendationsList: FC<TProps> = ({recommendations}) => {
    const recommendationsList = recommendations.map(recommendation => (<RecommendationsListItem key={recommendation.id}
                                                                                                recommendation={recommendation}/>))
    return (
        <Wrapper>
            {recommendationsList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  wrap: wrap;
`