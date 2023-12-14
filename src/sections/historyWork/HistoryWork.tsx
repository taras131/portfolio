import React from 'react';
import {TemplateSection} from "../TemplateSection";
import {workDescription, workHistory, workTitle} from "../../utils/consts";
import {HistoryList} from "../../components/HistoryList";

export const HistoryWork = () => {
    return (
        <TemplateSection sectionTitle={workTitle} sectionDescription={workDescription}>
            <HistoryList history={workHistory}/>
        </TemplateSection>
    );
};

