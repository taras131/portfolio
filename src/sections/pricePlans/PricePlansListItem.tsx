import React, {FC} from 'react';
import {TPlan} from "../../models/TPricePlans";
import {AdvantagesList} from "./AdvantagesList";
import {Button} from "../../components/Button";
import {S} from "./PricePlans_Style";

type TProps = {
    plan: TPlan
}

export const PricePlansListItem: FC<TProps> = ({plan}) => {
    return (
        <S.ListItemWrapper>
            {plan.isPopular && (
                <S.PopularLabel>
                    <span>most popular</span>
                </S.PopularLabel>
            )}
            <h3>{plan.name}</h3>
            <div>
                <S.Price>${plan.priceHourInDollars}<span>/hour</span></S.Price>
                <p>{plan.description}</p>
            </div>
            <AdvantagesList advantagesIdList={plan.advantagesIdList}/>
            <Button variant={plan.isPopular ? "contained" : "outlined"}
                    fontWeight={700}
                    as={"a"}
                    href={"#contacts"}>
                ORDER NOW
            </Button>
        </S.ListItemWrapper>
    );
};
