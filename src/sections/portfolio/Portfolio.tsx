import React, {FC, useEffect, useState} from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {portfolioCategories, portfolioDescription, portfolioTitle, portfolioWorks} from "../../utils/consts";
import {PortfolioList} from "./PortfolioList";
import {PortfolioNav} from "./PortfolioNav";

export const Portfolio: FC = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(0);
    const [filteredPortfolioWorks, setFilteredPortfolioWorks] = useState(portfolioWorks)
    useEffect(() => {
        if (activeCategoryId === 0) {
            setFilteredPortfolioWorks(portfolioWorks)
        } else {
            setFilteredPortfolioWorks(portfolioWorks.filter(work => work.categoryId === activeCategoryId))
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

