import React, {FC} from 'react';
import {TPlan} from "../../models/TPricePlans";
import {PricePlansListItem} from "./PricePlansListItem";
import styled from "styled-components";

type TProps = {
    plans: TPlan[]
}

export const PricePlansList: FC<TProps> = ({plans}) => {
    const plansList = plans.map(plan => (<PricePlansListItem key={plan.id} plan={plan}/>))
    return (
        <Wrapper>
            {plansList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  @media ${({theme}) => theme.media.tablet} {
    flex-wrap: nowrap;
    overflow: auto;
  }
`

