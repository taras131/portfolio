import React, {FC} from 'react';
import {Icon} from "../../components/Icon";
import {IconWrapper} from "../../components/IconWrapper";
import styled from "styled-components";
import {spriteIds} from "../../utils/consts";
import {TSocial} from "../../models/TProfile";

type TProps = {
    socialItem: TSocial
}

export const SocialListItem: FC<TProps> = ({socialItem}) => {
    return (
        <Wrapper>
            <Tooltip>
                <Icon iconId={spriteIds.popUp} width={65} height={33}/>
                <span>{socialItem.title}</span>
            </Tooltip>
            <IconWrapper isActive={true} sizePx={24} as={"a"} href={"#"} aria-label={socialItem.title}>
                <Icon iconId={socialItem.iconId}
                      height={14}
                      width={14}/>
            </IconWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover div:first-child {
    top: -35px;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover a svg {
    transition: all .6s ease;
    transform: rotateY(360deg);
  }
`
const Tooltip = styled.div`
  position: absolute;
  top: 0;
  padding: 5px 8px;
  opacity: 0;
  pointer-events: none;
  transition: all .3s ease;

  span {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({theme}) => theme.colors.backgroundPrimary};
    z-index: 100;
    font-size: 11px;
    font-weight: 500;
  }
`


