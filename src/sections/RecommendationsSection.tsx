import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {recommendations, recommendationsDescription, recommendationsTitle} from "../utils/consts";
import {RecommendationsList} from "../components/RecommendationsList";
import {Pagination} from "../components/Pagination";

export const RecommendationsSection = () => {
    return (
        <TemplateSection sectionTitle={recommendationsTitle} sectionDescription={recommendationsDescription}>
            <RecommendationsList recommendations={recommendations}/>
            <Pagination/>
        </TemplateSection>
    );
};
