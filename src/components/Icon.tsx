import React, {FC} from 'react';
import sprite from "../assets/icons/icons-sprite.svg";
import styled, {css} from "styled-components";

type TProps = {
    iconId: string,
    width?: number,
    height?: number,
    isActive?: boolean,
}

export const Icon: FC<TProps> = ({
                                     iconId,
                                     width = 74,
                                     height = 74,
                                     isActive = false,
                                 }) => {
    return (
        <SVG width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} isActive={isActive}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </SVG>
    );
};

type TStyledProps = {
    isActive: boolean,
}

const SVG = styled.svg<TStyledProps>`
  ${props => props.isActive && css<TStyledProps>`
    fill: ${props => props.theme.colors.accent};
  `}
`
