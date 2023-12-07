import React, {FC} from 'react';
import {plansAdvantages} from "../utils/consts";
import {PricePlansAdvantagesListItem} from "./PricePlansAdvantagesListItem";
import styled from "styled-components";

type TProps = {
    advantagesIdList: number []
}

export const PricePlansAdvantagesList: FC<TProps> = ({advantagesIdList}) => {
    const advantagesList = plansAdvantages.map(plansAdvantage => {
        const isInclude = advantagesIdList.includes(plansAdvantage.id)
        return (<PricePlansAdvantagesListItem key={plansAdvantage.id}
                                              plansAdvantage={plansAdvantage}
                                              isInclude={isInclude}/>)
    })
    return (
        <Wrapper>
            {advantagesList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 21px;
`
