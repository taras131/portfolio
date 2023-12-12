import React, {FC} from 'react';
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";
import styled, {css} from "styled-components";

type TProps = {
    title: string,
    iconId: string,
    isActive: boolean
    handleClick: () => void
}

export const NavigationItem: FC<TProps> = ({
                                               title,
                                               iconId,
                                               isActive,
                                               handleClick
                                           }) => {
    return (
        <Wrapper isActive={isActive}>
            <PopUp isActive={isActive}>
                <Icon iconId={spriteIds.popUp} width={65} height={33}/>
                <p>{title}</p>
            </PopUp>
            <NavIconWrapper isActive={isActive} onClick={handleClick}>
                <Icon iconId={iconId} height={18} width={18}/>
            </NavIconWrapper>
        </Wrapper>
    );
};

type TStyledProps = {
    isActive: boolean
}

const Wrapper = styled.li<TStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;

  & svg {
    ${props => props.isActive && css<TStyledProps>`
      fill: ${({theme}) => theme.colors.textPrimary};
    `}
    ${props => !props.isActive && css<TStyledProps>`
      fill: ${({theme}) => theme.colors.textSecondary};
    `}
  }
`;

const PopUp = styled.div<TStyledProps>`
  position: relative;
  opacity: 0;

  ${props => props.isActive && css<TStyledProps>`
    opacity: 1;
  `}
  & p {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({theme}) => theme.colors.sectionBackgroundColor};
    z-index: 100;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const NavIconWrapper = styled.div<TStyledProps>`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
  }

  ${props => props.isActive && css<TStyledProps>`
    background-color: ${({theme}) => theme.colors.primary};
  `}
  ${props => !props.isActive && css<TStyledProps>`
    background-color: ${({theme}) => theme.colors.backgroundColor};
  `}
`