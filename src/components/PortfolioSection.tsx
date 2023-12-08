import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {portfolioCategories, portfolioDescription, portfolioTitle, portfolioWorks} from "../utils/consts";
import {PortfolioList} from "./PortfolioList";
import {PortfolioNav} from "./PortfolioNav";

export const PortfolioSection = () => {
    return (
        <TemplateSection sectionTitle={portfolioTitle}
                         sectionDescription={portfolioDescription}>
            <PortfolioNav categories={portfolioCategories}/>
            <PortfolioList portfolioWorks={portfolioWorks}/>
        </TemplateSection>
    );
};

