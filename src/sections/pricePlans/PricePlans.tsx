import React, {FC, LegacyRef} from 'react';
import {TemplateSection} from "../../components/TemplateSection";
import {plansTitle, plansDescription, plans} from "../../utils/consts";
import {PricePlansListItem} from "./PricePlansListItem";
import {S} from "./PricePlans_Style"


type TProps = {
    priceRef: LegacyRef<HTMLDivElement>
}

export const PricePlans: FC<TProps> = ({priceRef}) => {
    const plansList = plans.map(plan => (<PricePlansListItem key={plan.id} plan={plan}/>))
    return (
        <TemplateSection sectionTitle={plansTitle}
                         sectionDescription={plansDescription}>
            <S.ListWrapper>
                {plansList}
            </S.ListWrapper>
        </TemplateSection>
    );
};

