import React, {FC} from 'react';
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";
import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

type TProps = {
    handleClick: () => void
}

export const Close: FC<TProps> = ({handleClick}) => {
    return (
        <Wrapper onClick={handleClick} aria-label={"закрыть"}>
            <Icon iconId={spriteIds.close} height={23} width={23} isActive={true}/>
        </Wrapper>
    );
};

const Wrapper = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  display: none;

  @media ${theme.media.laptop} {
    display: block;
  }
`

