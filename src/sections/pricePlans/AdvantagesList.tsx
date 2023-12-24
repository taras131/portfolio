import React, {FC} from 'react';
import {plansAdvantages, spriteIds} from "../../utils/consts";
import styled from "styled-components";
import {ListItemWithIcon} from "../../components/listItemWithIcon/ListItemWithIcon";

type TProps = {
    advantagesIdList: number []
}

export const AdvantagesList: FC<TProps> = ({advantagesIdList}) => {
    const advantagesList = plansAdvantages.map(plansAdvantage => {
        const isActive = advantagesIdList.includes(plansAdvantage.id)
        return (<ListItemWithIcon key={plansAdvantage.id}
                                  iconId={isActive ? spriteIds.check : spriteIds.close}
                                  title={plansAdvantage.name}
                                  isActive={isActive}/>)
    })
    return (
        <Wrapper>
            {advantagesList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  width: 100%;

  li:not(li:last-child) {
    margin-bottom: 15px;
  }
`
