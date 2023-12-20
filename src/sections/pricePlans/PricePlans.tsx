import React, {FC, LegacyRef} from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {plansTitle, plansDescription, plans} from "../../utils/consts";
import {PricePlansList} from "./PricePlansList";


type TProps = {
    priceRef: LegacyRef<HTMLDivElement>
}

export const PricePlans: FC<TProps> = ({priceRef}) => {
    return (
        <TemplateSection sectionTitle={plansTitle}
                         sectionDescription={plansDescription}>
            <PricePlansList plans={plans}/>
        </TemplateSection>
    );
};

