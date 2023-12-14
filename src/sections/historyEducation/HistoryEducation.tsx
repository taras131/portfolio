import React from 'react';
import {TemplateSection} from "../TemplateSection";
import {educationDescription, educationHistory, educationTitle} from "../../utils/consts";
import {HistoryList} from "../../components/HistoryList";

export const HistoryEducation = () => {
    return (
        <TemplateSection sectionTitle={educationTitle} sectionDescription={educationDescription}>
            <HistoryList history={educationHistory}/>
        </TemplateSection>
    );
};

