import React, {FC} from 'react';
import {TPlan} from "../../models/TPricePlans";
import styled from "styled-components";
import {AdvantagesList} from "./AdvantagesList";
import {Button} from "../../components/Button";

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
            <div>
                <Price>${plan.priceHourInDollars}<span>/hour</span></Price>
                <Description>{plan.description}</Description>
            </div>
            <AdvantagesList advantagesIdList={plan.advantagesIdList}/>
            <Button variant={plan.isPopular ? "contained" : "outlined"}
                    fontWeight={700}
                    as={"a"}
                    href={"#"}>
                ORDER NOW
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  max-width: 310px;
  width: 100%;
  min-height: 609px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 55px 30px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h3, p {
    text-align: center;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
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
`

const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.textPrimary};

  span {
    margin-left: 10px;
  }
`

const Description = styled.p`
  margin-top: 8px;
`


