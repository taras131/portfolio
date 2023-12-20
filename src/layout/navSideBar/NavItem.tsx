import React, {FC} from 'react';
import {Icon} from "../../components/Icon";
import {spriteIds} from "../../utils/consts";
import styled, {css} from "styled-components";
import {IconWrapper} from "../../components/IconWrapper";

type TProps = {
    title: string,
    iconId: string,
    isActive: boolean
    handleClick: () => void
}

export const NavItem: FC<TProps> = ({
                                        title,
                                        iconId,
                                        isActive,
                                        handleClick
                                    }) => {
    return (
        <Wrapper isActive={isActive} aria-label={title}>
            <Tooltip isActive={isActive}>
                <Icon iconId={spriteIds.popUp} width={65} height={33}/>
                <span>{title}</span>
            </Tooltip>
            <IconWrapper isActive={isActive} onClick={handleClick} as={"a"}>
                <Icon iconId={iconId} height={18} width={18}/>
            </IconWrapper>
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
  position: relative;

  & svg {
    ${props => props.isActive && css<TStyledProps>`
      fill: ${({theme}) => theme.colors.textPrimary};
    `}
    ${props => !props.isActive && css<TStyledProps>`
      fill: ${({theme}) => theme.colors.textSecondary};
    `}
  }
`;

const Tooltip = styled.div<TStyledProps>`
  top: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  transition: all .3s ease;

  ${props => props.isActive && css<TStyledProps>`
    top: -35px;
    opacity: 1;
    pointer-events: auto;
  `}
  
  span {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({theme}) => theme.colors.backgroundPrimary};
    z-index: 100;
    font-size: 12px;
    font-weight: 500;
  }
`
