import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {Icon} from "./Icon";
import {Button} from "./Button";

type TProps = {
    title: string
    subtitle: string
    iconId?: string
}

export const ServicesListItem: FC<TProps> = ({title, subtitle, iconId}) => {
    return (
        <Wrapper>
            {iconId && (<Icon iconId={iconId}/>)}
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {!iconId && (
                <Button variant={"text"}>
                    ORDER NOW
                    <Icon iconId={"rightArrow"} height={20} width={20}/>
                </Button>
            )}
        </Wrapper>
    );
};

type WrapperProps = {
    iconId?: string
}

const Wrapper = styled.li<WrapperProps>`
  height: 225px;
  width: 310px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;


  & h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
    ${(props) => props.iconId && css<WrapperProps>`
      margin-top: 25px;
    `}

    ${(props) => !props.iconId && css<WrapperProps>`
      margin-top: 5px;
    `}
  }

  & p {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.textSecondary};
  }
`

