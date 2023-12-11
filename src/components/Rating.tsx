import React, {FC} from 'react';
import {TRating} from "../models/TRecommendations";
import styled from "styled-components";
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";

type TRatingProps = {
    rating: TRating
}

const ratings = [0, 1, 2, 3, 4]

export const Rating: FC<TRatingProps> = ({rating}) => {
    const ratingStarsList = ratings.map((item,index) => (
        <Icon key={item.toString()} width={18} height={18} isActive={rating > index} iconId={spriteIds.star}/>
    ))
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


