import React, {FC} from 'react';
import {Icon} from "../Icon";
import {spriteIds} from "../../utils/consts";
import {S} from "./ListItemWithIcon_Style";

type TProps = {
    iconId: spriteIds,
    title: string,
    isActive?: boolean
}

export const ListItemWithIcon:FC<TProps> = ({iconId, title, isActive= true}) => {
    return (
        <S.Wrapper isActive={isActive}>
            <Icon width={25} height={25} iconId={iconId} isActive={isActive}/>
            <span>
                {title}
            </span>
        </S.Wrapper>
    );
};

