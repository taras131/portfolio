import React, {FC} from 'react';
import {Icon} from "../../components/Icon";
import {IconWrapper} from "../../components/IconWrapper";

type TProps = {
    socialItem: string
}

export const SocialListItem: FC<TProps> = ({socialItem}) => {
    return (
        <IconWrapper isActive={true} sizePx={24} as={"a"} href={"#"}>
            <Icon iconId={socialItem}
                  height={14}
                  width={14}/>
        </IconWrapper>
    );
};


