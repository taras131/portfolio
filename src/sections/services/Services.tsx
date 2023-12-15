import React from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {servicesTitle, servicesDescription, services} from "../../utils/consts";
import {ServicesList} from "./ServicesList";

export const Services = () => {
    return (
        <TemplateSection sectionTitle={servicesTitle}
                         sectionDescription={servicesDescription}>
            <ServicesList services={services}/>
        </TemplateSection>
    );
};
