import React, {FC} from 'react';
import {Icon} from "../../components/Icon";
import {Button} from "../../components/Button";
import {S} from "./Services_Style"
import {spriteIds} from "../../utils/consts";
import {TService} from "../../models/TServices";

export const ServicesListItem: FC<TService> = ({title, subtitle, iconId}) => {
    return (
        <S.ListItemWrapper>
            <Icon iconId={iconId}/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div>
                <h4>Advertising</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vitae nulla diam in ac dictum a urna
                    viverra morbi.
                </p>
                <Button variant={"text"} as={"a"} href={"#contacts"} fontSizePx={12} fontWeight={700} gapPx={1}>
                    ORDER NOW
                    <Icon iconId={spriteIds.rightArrow} height={20} width={20}/>
                </Button>
            </div>
        </S.ListItemWrapper>
    );
};



