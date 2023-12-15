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
        <Wrapper isActive={isActive}>
            <PopUp isActive={isActive}>
                <Icon iconId={spriteIds.popUp} width={65} height={33}/>
                <span>{title}</span>
            </PopUp>
            <IconWrapper isActive={isActive} onClick={handleClick} as={"button"}>
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
  
  span {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({theme}) => theme.colors.sectionBackgroundColor};
    z-index: 100;
    font-size: 12px;
    font-weight: 500;
  }
`
