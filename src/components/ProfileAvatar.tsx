import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";
import {ProfileSocialList} from "./ProfileSocialList";

type TProps = {
    imgPatch: string,
    name: string,
    role: string,
    social: string [],
}

export const ProfileAvatar: FC<TProps> = ({
                                              imgPatch,
                                              name,
                                              role,
                                              social
                                          }) => {
    return (
        <Wrapper>
            <PhotoWrapper>
                <img src={imgPatch} alt="my photo"/>
            </PhotoWrapper>
            <h2>{name}</h2>
            <p>{role}</p>
            <ProfileSocialList social={social}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & h2 {
    margin-top: 30px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }

  & p {
    margin-top: 15px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.black.secondary}
  }
`;
const PhotoWrapper = styled.div`
  width: 150px;
  height: 150px;

  & img {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    object-fit: none;
  }
`;



