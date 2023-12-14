import React, {FC} from 'react';
import styled from "styled-components";
import {ProfileSocialListItem} from "./ProfileSocialListItem";

type TProps = {
    social: string[]
}

export const ProfileSocialList: FC<TProps> = ({social}) => {
    const socialList = social.map(socialItem => (<ProfileSocialListItem key={socialItem}
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
