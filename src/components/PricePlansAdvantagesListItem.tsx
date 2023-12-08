import React, {FC} from 'react';
import {TPlansAdvantage} from "../models/TPricePlans";
import sprite from "../assets/icons/icons-sprite.svg"
import styled from "styled-components";

type TProps = {
    plansAdvantage: TPlansAdvantage
    isInclude: boolean
}

export const PricePlansAdvantagesListItem: FC<TProps> = ({plansAdvantage, isInclude}) => {
    console.log(isInclude)
    return (
        <Wrapper isInclude={isInclude}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="25"
                 height="24"
                 viewBox="0 0 25 24"
                 fill="none">
                <use xlinkHref={`${sprite}#${isInclude ? "check" : "close"}`}/>
            </svg>
            <span>
                {plansAdvantage.name}
            </span>
        </Wrapper>
    );
};

type TWrapper = {
    isInclude: boolean
}

const Wrapper = styled.li<TWrapper>`
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  & svg {
    margin-right: 15px;
    fill: ${props => props.isInclude ? props.theme.colors.primary : "none"};
  }

  & span {
    color: ${props => props.isInclude
            ? props.theme.colors.black.primary
            : props.theme.colors.black.secondary};
  }
`
