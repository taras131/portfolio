import React, {FC} from 'react';
import {TRating} from "../models/TRecommendations";
import styled from "styled-components";
import sprite from "../assets/icons/icons-sprite.svg";

type TRatingProps = {
    rating: TRating
}

const ratings = [0, 1, 2, 3, 4]

export const Rating: FC<TRatingProps> = ({rating}) => {
    const ratingStarsList = ratings.map(index => (<RatingStar isActive={rating > index}/>))
    return (
        <Wrapper>
            {ratingStarsList}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

type TRatingStarProps = {
    isActive: boolean
}

const RatingStar: FC<TRatingStarProps> = ({isActive}) => {
    return (
        <SVG xmlns="http://www.w3.org/2000/svg"
             width="18"
             height="18"
             viewBox="0 0 18 18"
             fill="none"
             isActive={isActive}>
            <use xlinkHref={`${sprite}#${"star"}`}/>
        </SVG>
    )
}

const SVG = styled.svg<TRatingStarProps>`
  fill: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.black.secondary};
`
