import React, {FC, useState} from 'react';
import styled from "styled-components";
import {TPortfolioCategory} from "../models/TPortfolio";
import {PortfolioNavItem} from "./PortfolioNavItem";

type TProps = {
    categories: TPortfolioCategory []
}

export const PortfolioNav: FC<TProps> = ({categories}) => {
    const [activeCategoryId, setActiveCategoryId] = useState(0);
    const handleCategoryChange = (categoryId: number) => () => {
        setActiveCategoryId(categoryId)
    }
    const navList = categories.map(category => (<PortfolioNavItem key={category.id}
                                                                  category={category}
                                                                  isActive={category.id === activeCategoryId}
                                                                  handleCategoryChange={handleCategoryChange(category.id)}/>))


    return (
        <Wrapper>
            <ul>
                {navList}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
  margin: 0 auto;
  padding-bottom: 50px;

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 37px;
  }
`

