import React from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {servicesTitle, servicesDescription, services} from "../../utils/consts";
import {ServicesListItem} from "./ServicesListItem";
import {FlexContainer} from "../../components/FlexContainer";

export const Services = () => {
    const servicesList = services.map(service => (<ServicesListItem key={service.id} {...service}/>))
    return (
        <TemplateSection sectionTitle={servicesTitle}
                         sectionDescription={servicesDescription}>
            <FlexContainer justify={"space-between"}>
                {servicesList}
            </FlexContainer>
        </TemplateSection>
    );
};
