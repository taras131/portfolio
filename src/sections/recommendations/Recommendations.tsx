import React from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {recommendations, recommendationsDescription, recommendationsTitle} from "../../utils/consts";
import {RecommendationsList} from "./RecommendationsList";

export const Recommendations = () => {
    return (
        <TemplateSection sectionTitle={recommendationsTitle} sectionDescription={recommendationsDescription}>
            <RecommendationsList recommendations={recommendations}/>
        </TemplateSection>
    );
};
