import React, {FC} from 'react';
import styled from "styled-components";
import {SocialList} from "./SocialList";
import {TProfileMain} from "../../models/TProfile";
import backGroundPhoto from "../../assets/images/my_photo.webp";

type TProps = {
    profileMain: TProfileMain
}

export const ProfileMain: FC<TProps> = ({profileMain}) => {
    return (
        <Wrapper>
            <PhotoWrapper>

            </PhotoWrapper>
            <span>{profileMain.name}</span>
            <h2>{profileMain.role}</h2>
            <SocialList social={profileMain.social}/>
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

  span {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    margin-top: 15px;
    font-size: 15px;
    font-weight: 400;
  }
`;

const PhotoWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  position: relative;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  background-image: url(${backGroundPhoto});
  background-position: top center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #7EB942;
    right: 14px;
    bottom: 14px;
  }
`;



