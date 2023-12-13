import React, {FC} from 'react';
import {TPlansAdvantage} from "../../models/TPricePlans";
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {spriteIds} from "../../utils/consts";

type TProps = {
    plansAdvantage: TPlansAdvantage
    isInclude: boolean
}

export const AdvantagesListItem: FC<TProps> = ({plansAdvantage, isInclude}) => {
    return (
        <Wrapper isInclude={isInclude}>
            <Icon width={25} height={25} iconId={isInclude ? spriteIds.check : spriteIds.close} isActive={isInclude}/>
            <span>
                {plansAdvantage.name}
            </span>
        </Wrapper>
    );
};

type TWrapper = {
    isInclude: boolean
}

const Wrapper = styled.li<TWrapper>`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 15px;
    fill: ${props => props.isInclude ? props.theme.colors.accent : props.theme.colors.textSecondary};
  }

  span {
    color: ${props => props.isInclude
            ? props.theme.colors.textPrimary
            : props.theme.colors.textSecondary};
  }
`
