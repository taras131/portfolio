import React, {FC, useEffect, useState} from 'react';
import {TemplateSection} from "../TemplateSection";
import {portfolioCategories, portfolioDescription, portfolioTitle, portfolioWorks} from "../../utils/consts";
import {PortfolioList} from "./PortfolioList";
import {PortfolioNav} from "./PortfolioNav";

export const Portfolio: FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(0);
    const [filteredPortfolioWorks, setFilteredPortfolioWorks] = useState(portfolioWorks)
    useEffect(() => {
        switch (activeCategoryId) {
            case 1:
                setFilteredPortfolioWorks(portfolioWorks.filter(work => work.categoryId === 1))
                break;
            case 2:
                setFilteredPortfolioWorks(portfolioWorks.filter(work => work.categoryId === 2))
                break;
            case 3:
                setFilteredPortfolioWorks(portfolioWorks.filter(work => work.categoryId === 3))
                break;
            case 4:
                setFilteredPortfolioWorks(portfolioWorks.filter(work => work.categoryId === 4))
                break;
            default:
                setFilteredPortfolioWorks(portfolioWorks)
                break;
        }
    }, [activeCategoryId])
    const handleCategoryChange = (categoryId: number) => () => {
        setActiveCategoryId(categoryId)
    }
    return (
        <TemplateSection sectionTitle={portfolioTitle}
                         sectionDescription={portfolioDescription}>
            <PortfolioNav categories={portfolioCategories}
                          activeCategoryId={activeCategoryId}
                          handleCategoryChange={handleCategoryChange}/>
            <PortfolioList portfolioWorks={filteredPortfolioWorks}/>
        </TemplateSection>
    );
};

