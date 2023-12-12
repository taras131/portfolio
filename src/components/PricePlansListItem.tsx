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
            {plan.isPopular && (
                <PopularLabel>
                    <span>most popular</span>
                </PopularLabel>
            )}
            <h3>{plan.name}</h3>
            <Price>${plan.priceHourInDollars}<span>/hour</span></Price>
            <Description>{plan.description}</Description>
            <PricePlansAdvantagesList advantagesIdList={plan.advantagesIdList}/>
            <ButtonWrapper>
                <Button variant={plan.isPopular ? "contained" : "outlined"}>
                    ORDER NOW
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 310px;
  height: 609px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 55px 30px 25px 30px;
  position: relative;

  & h3, p {
    text-align: center;
  }

  & h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 123.6%; /* 29.664px */
    text-transform: capitalize;
  }
`

const PopularLabel = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({theme}) => theme.colors.accent};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
  }
`

const Price = styled.p`
  margin-top: 20px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.6%; /* 39.552px */
  text-transform: capitalize;

  & span {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    margin-left: 10px;
  }
`

const Description = styled.p`
  margin-top: 8px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.textSecondary};
`

const ButtonWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
