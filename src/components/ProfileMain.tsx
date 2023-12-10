import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "./Icon";
import {spriteIds} from "../utils/consts";
import {ProfileSocialList} from "./ProfileSocialList";
import {TProfileMain} from "../models/TProfile";

type TProps = {
    profileMain: TProfileMain
}

export const ProfileMain: FC<TProps> = ({profileMain}) => {
    return (
        <Wrapper>
            <PhotoWrapper>
                <img src={profileMain.myPhotoPath} alt="my photo"/>
            </PhotoWrapper>
            <h2>{profileMain.name}</h2>
            <p>{profileMain.role}</p>
            <ProfileSocialList social={profileMain.social}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding-bottom: 25px;

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

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    position: absolute;
    bottom: 0;
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



