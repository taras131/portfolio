import React, {FC} from 'react';
import {TPortfolio} from "../models/TPortfolio";
import {PortfolioListItem} from "./PortfolioListItem";
import styled from "styled-components";

type TProps = {
    portfolioWorks: TPortfolio []
}

export const PortfolioList: FC<TProps> = ({portfolioWorks}) => {
    const portfolioList = portfolioWorks.map(portfolioWork => (<PortfolioListItem key={portfolioWork.id}
                                                                                  portfolioWork={portfolioWork}/>))
    return (
        <Wrapper>
            {portfolioList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

