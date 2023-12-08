import React from 'react';
import {TemplateSection} from "./TemplateSection";
import {servicesTitle, servicesDescription, services} from "../utils/consts";
import {ServicesList} from "./ServicesList";

export const ServicesSection = () => {
    return (
        <TemplateSection sectionTitle={servicesTitle}
                         sectionDescription={servicesDescription}>
            <ServicesList services={services}/>
        </TemplateSection>
    );
};
