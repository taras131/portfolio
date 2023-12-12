import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {portfolioCategories, portfolioDescription, portfolioTitle, portfolioWorks} from "../utils/consts";
import {PortfolioList} from "../components/PortfolioList";
import {PortfolioNav} from "../components/PortfolioNav";

export const PortfolioSection = React.forwardRef<HTMLHeadingElement>((props, ref) => {
    return (
        <TemplateSection sectionTitle={portfolioTitle}
                         sectionDescription={portfolioDescription}
                         ref={ref}>
            <PortfolioNav categories={portfolioCategories}/>
            <PortfolioList portfolioWorks={portfolioWorks}/>
        </TemplateSection>
    );
});
