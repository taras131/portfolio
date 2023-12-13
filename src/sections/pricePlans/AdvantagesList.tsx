import React, {FC} from 'react';
import {plansAdvantages} from "../../utils/consts";
import {AdvantagesListItem} from "./AdvantagesListItem";
import styled from "styled-components";

type TProps = {
    advantagesIdList: number []
}

export const AdvantagesList: FC<TProps> = ({advantagesIdList}) => {
    const advantagesList = plansAdvantages.map(plansAdvantage => {
        const isInclude = advantagesIdList.includes(plansAdvantage.id)
        return (<AdvantagesListItem key={plansAdvantage.id}
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
  width: 100%;
  li {
    margin-bottom: 15px;
  }
  li:last-child {
    margin-bottom: 5px;
  }
`
