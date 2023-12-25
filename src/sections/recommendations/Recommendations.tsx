import React, {useEffect, useRef, useState} from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {recommendations, recommendationsDescription, recommendationsTitle} from "../../utils/consts";
import {RecommendationsListItem} from "./RecommendationsListItem";
import styled, {css} from "styled-components";

export const Recommendations = () => {
    const ref = useRef<HTMLHeadingElement>(null)
    const recommendationsList = recommendations.map(recommendation => (
        <RecommendationsListItem key={recommendation.id + " " + recommendation.title}
                                 recommendation={recommendation}/>))
    const [activeSlide, setActiveSlide] = useState(0)
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        setOffset(-Math.abs((activeSlide * 320) + 12 * (activeSlide)))
    }, [activeSlide])
    const changeActiveSlide = (newValue: number) => () => {
        if (newValue >= 0 && newValue < recommendations.length) {
            setActiveSlide(newValue)
        }
    }
    const paginationButtons = recommendations.map((recommendation, index) => (
        <PaginationItem key={recommendation.title + " " + index}
                        onClick={changeActiveSlide(index)}
                        isActive={index === activeSlide}>

        </PaginationItem>
    ))
    let x1: number | null = null;
    const handleTouchStart = (e: any) => {
        x1 = e.touches[0].clientX
    }
    const handleTouchMove = (e: any) => {
        let x2 = e.touches[0].clientX
        if (x1) {
            if (x1 > x2) {
                setActiveSlide(prev => {
                    if (prev < recommendations.length - 1) {
                        return prev + 1
                    }
                    return prev
                })
            } else {
                setActiveSlide(prev => {
                    if (prev > 0) {
                        return prev - 1
                    }
                    return prev
                })
            }
        }
        x1 = null;
    }

    useEffect(() => {
        let element: any = null;
        if (ref && ref.current) {
            element = ref.current;
            element.addEventListener('touchstart', handleTouchStart);
            element.addEventListener('touchmove', handleTouchMove);
        }
        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchmove', handleTouchMove);
        };
    }, [ref])
    return (
        <TemplateSection sectionTitle={recommendationsTitle} sectionDescription={recommendationsDescription}>
            <RecommendationsWrapper offset={offset} ref={ref}>
                <div>
                    {recommendationsList}
                </div>
            </RecommendationsWrapper>
            <PaginationWrapper>
                {paginationButtons}
            </PaginationWrapper>
        </TemplateSection>
    );
};

type TWrapperProps = {
    offset: number
}

const RecommendationsWrapper = styled.div<TWrapperProps>`
  overflow: hidden;

  & > div {
    transition: all .4s ease;
    display: flex;
    gap: 20px;
    transform: translateX(${props => props.offset + "px"});
  }

  @media screen and (max-width: 1400px) {
    max-width: 635px;
    width: 100%;
    margin: 0 auto;
  }

  @media ${({theme}) => theme.media.tablet} {
    max-width: 310px;
    width: 100%;
  }
`


const PaginationWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

`
type TPaginationListProps = {
    isActive: boolean
}

const PaginationItem = styled.div<TPaginationListProps>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({theme}) => theme.colors.textSecondary};
  cursor: pointer;
  ${props => props.isActive && css<TPaginationListProps>`
    background-color: ${({theme}) => theme.colors.accent};
  `}
`
