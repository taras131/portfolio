import React, {FC} from 'react';
import styled from "styled-components";
import sprite from "../assets/icons/icons-sprite.svg"
import {Icon} from "./Icon";

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
                <button>
                    ORDER NOW
                    <Icon iconId={"rightArrow"} height={"20"} width={"20"}/>
                </button>
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
  }

  & button {
    color: ${({theme}) => theme.colors.primary};
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  & button:hover svg {
    margin-left: 10px;
  }
`

