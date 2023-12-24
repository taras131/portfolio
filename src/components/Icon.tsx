import React, {FC} from 'react';
import sprite from "../assets/icons/icons-sprite.svg";
import {spriteIds} from "../utils/consts";

type TProps = {
    iconId: spriteIds,
    width?: number,
    height?: number,
}

export const Icon: FC<TProps> = ({
                                     iconId,
                                     width = 74,
                                     height = 74,
                                 }) => {
    return (
        <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
    );
};

