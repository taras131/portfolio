import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {workDescription, workHistory, workTitle} from "../utils/consts";
import {HistoryList} from "./HistoryList";

export const WorkSection = () => {
    return (
        <TemplateSection sectionTitle={workTitle} sectionDescription={workDescription}>
            <HistoryList history={workHistory}/>
        </TemplateSection>
    );
};

