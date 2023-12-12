import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";

type TProps = {
    socialItem: string
}

export const ProfileSocialListItem: FC<TProps> = ({socialItem}) => {
    return (
        <Wrapper>
            <Icon iconId={socialItem}
                  height={14}
                  width={14}/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

