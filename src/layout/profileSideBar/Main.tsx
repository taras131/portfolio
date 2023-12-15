import React, {FC} from 'react';
import styled from "styled-components";
import {SocialList} from "./SocialList";
import {TProfileMain} from "../../models/TProfile";

type TProps = {
    profileMain: TProfileMain
}

export const Main: FC<TProps> = ({profileMain}) => {
    return (
        <Wrapper>
            <PhotoWrapper>
                <img src={profileMain.myPhotoPath} alt="my photo"/>
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
  overflow: hidden;
  border-radius: 150px;
  position: relative;
  background-color: ${({theme}) => theme.colors.backgroundColor};

  img {
    width: 100%;
  }

  span::after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #7EB942;
    right: 50%;
    top: 50%;
  }
`;



