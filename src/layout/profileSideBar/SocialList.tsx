import React, {FC} from 'react';
import styled from "styled-components";
import {SocialListItem} from "./SocialListItem";

type TProps = {
    social: string[]
}

export const SocialList: FC<TProps> = ({social}) => {
    const socialList = social.map(socialItem => (<SocialListItem key={socialItem}
                                                                 socialItem={socialItem}/>))
    return (
        <Wrapper>
            {socialList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
