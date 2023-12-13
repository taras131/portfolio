import React, {FC} from 'react';
import {TemplateSection} from "./TemplateSection";
import {portfolioCategories, portfolioDescription, portfolioTitle, portfolioWorks} from "../utils/consts";
import {PortfolioList} from "../components/PortfolioList";
import {PortfolioNav} from "../components/PortfolioNav";

export const PortfolioSection:FC = () => {
    return (
        <TemplateSection sectionTitle={portfolioTitle}
                         sectionDescription={portfolioDescription}>
            <PortfolioNav categories={portfolioCategories}/>
            <PortfolioList portfolioWorks={portfolioWorks}/>
        </TemplateSection>
    );
};

