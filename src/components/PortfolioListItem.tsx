import React, {FC} from 'react';
import {TPortfolio} from "../models/TPortfolio";
import styled from "styled-components";

type TProps = {
    portfolioWork: TPortfolio;
}

export const PortfolioListItem: FC<TProps> = ({portfolioWork}) => {
    return (
        <Wrapper>
            <img src={portfolioWork.imgPath} alt="portfolio"/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  & img {
    width: 310px;
    height: 300px;
    object-fit: cover;
  }
`

