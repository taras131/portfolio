import React, {FC} from 'react';
import {TPortfolioCategory} from "../../models/TPortfolio";
import styled, {css} from "styled-components";

type TProps = {
    category: TPortfolioCategory
    isActive?: boolean
    handleCategoryChange: () => void
}

export const PortfolioNavItem: FC<TProps> = ({
                                                 category,
                                                 isActive = false,
                                                 handleCategoryChange
                                             }) => {
    return (
        <Wrapper isActive={isActive} onClick={handleCategoryChange}>
            {category.title}
        </Wrapper>
    );
};

type TWrapperProps = {
    isActive: boolean
}

const Wrapper = styled.li<TWrapperProps>`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  
  ${props => props.isActive && css<TWrapperProps>`
    color: ${props => props.theme.colors.accent};
  `}
`
