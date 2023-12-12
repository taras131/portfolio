import React, {FC} from 'react';
import {TPortfolio} from "../models/TPortfolio";
import styled from "styled-components";
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";

type TProps = {
    portfolioWork: TPortfolio;
}

export const PortfolioListItem: FC<TProps> = ({portfolioWork}) => {
    return (
        <Wrapper>
            <Icon iconId={spriteIds.plus} height={52} width={52}/>
            <img src={portfolioWork.imgPath} alt="portfolio"/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(255, 180, 0, 0.95);
      z-index: 0;
      cursor: pointer;
    }

    & svg {
      opacity: 1;
    }
  }

  & img {
    width: 310px;
    height: 300px;
    object-fit: cover;
  }

  & svg {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
  }
`

