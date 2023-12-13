import React from 'react';
import {TemplateSection} from "../TemplateSection";
import {plansTitle, plansDescription, plans} from "../../utils/consts";
import {PricePlansList} from "./PricePlansList";

export const PricePlans = () => {
    return (
        <TemplateSection sectionTitle={plansTitle} sectionDescription={plansDescription}>
            <PricePlansList plans={plans}/>
        </TemplateSection>
    );
};

