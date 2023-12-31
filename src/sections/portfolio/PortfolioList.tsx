import React, {FC} from 'react';
import {TPortfolio} from "../../models/TPortfolio";
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
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`

