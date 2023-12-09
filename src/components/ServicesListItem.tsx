import React, {FC} from 'react';
import styled from "styled-components";
import sprite from "../assets/icons/icons-sprite.svg"
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
                    <Icon iconId={"rightArrow"} height={"20"} width={"20"}/>
                </Button>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.li`
  height: 225px;
  width: 310px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  & h3 {
    margin-top: 25px;
  }

  & p {
    margin-top: 15px;
    margin-bottom: 20px;
  }
`

