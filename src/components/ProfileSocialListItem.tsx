import React, {FC} from 'react';
import styled from "styled-components";
import {spriteIds} from "../utils/consts";
import {Icon} from "./Icon";

type TProps = {
    socialItem: string
}

export const ProfileSocialListItem: FC<TProps> = ({socialItem}) => {
    return (
        <Wrapper>
            <Icon iconId={socialItem}
                  height={"14px"}
                  width={"14px"}/>
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

