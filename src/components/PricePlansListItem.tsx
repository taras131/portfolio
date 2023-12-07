import React, {FC} from 'react';
import {TPlan} from "../models/TPricePlans";
import styled from "styled-components";
import {PricePlansAdvantagesList} from "./PricePlansAdvantagesList";
import {Button} from "./Button";

type TProps = {
    plan: TPlan
}

export const PricePlansListItem: FC<TProps> = ({plan}) => {
    return (
        <Wrapper>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <PricePlansAdvantagesList advantagesIdList={plan.advantagesIdList}/>
            <div>
                <Button variant={plan.isPopular ? "contained" : "outlined"}>
                    ORDER NOW
                </Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 310px;
  height: 609px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 54px 31px 25px 31px;

  & h3, p {
    text-align: center;
  }

  & p {
    margin-top: 8px;
  }

  & div {
    padding-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
