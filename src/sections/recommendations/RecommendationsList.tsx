import React, {FC, useEffect, useState} from 'react';
import {TRecommendation} from "../../models/TRecommendations";
import {RecommendationsListItem} from "./RecommendationsListItem";
import styled, {css} from "styled-components";

type TProps = {
    recommendations: TRecommendation []
}

export const RecommendationsList: FC<TProps> = ({recommendations}) => {


    const recommendationsList = recommendations.map(recommendation => (
        <RecommendationsListItem key={recommendation.id + " " + recommendation.title}
                                 recommendation={recommendation}/>))
    const [activeSlide, setActiveSlide] = useState(0)
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        setOffset(-Math.abs((activeSlide * 320) + 12 * (activeSlide)))
    }, [activeSlide])
    const changeActiveSlide = (newValue: number) => () => {
        setActiveSlide(newValue)
    }
    const paginationButtons = recommendations.map((recommendation, index) => (
        <PaginationListItem key={recommendation.title + " " + index}
                            onClick={changeActiveSlide(index)}
                            isActive={index === activeSlide}>

        </PaginationListItem>
    ))
    return (
        <>
            <Wrapper offset={offset}>
                <ul>
                    {recommendationsList}
                </ul>
            </Wrapper>
            <PaginationList>
                {paginationButtons}
            </PaginationList>
        </>

    );
};

type TWrapperProps = {
    offset: number
}

const Wrapper = styled.div<TWrapperProps>`
  overflow: hidden;

  ul {
    transition: all .4s ease;
    display: flex;
    gap: 20px;
    transform: translateX(${props => props.offset + "px"});
  }
`


const PaginationList = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

`
type TPaginationListProps = {
    isActive: boolean
}

const PaginationListItem = styled.div<TPaginationListProps>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({theme}) => theme.colors.textSecondary};
  cursor: pointer;
  ${props => props.isActive && css<TPaginationListProps>`
    background-color: ${({theme}) => theme.colors.accent};
  `}
`
