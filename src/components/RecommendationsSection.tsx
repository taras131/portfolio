import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {recommendations, recommendationsDescription, recommendationsTitle} from "../utils/consts";
import {RecommendationsList} from "./RecommendationsList";

export const RecommendationsSection = () => {
    return (
        <TemplateSection sectionTitle={recommendationsTitle} sectionDescription={recommendationsDescription}>
            <RecommendationsList recommendations={recommendations}/>
        </TemplateSection>
    );
};
