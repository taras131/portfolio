import React from 'react';
import styled from "styled-components";
import {ProfileAvatar} from "../../components/ProfileAvatar";
import {myProfile} from "../../utils/consts";
import {ProfileParametersList} from "../../components/ProfileParametersList";
import {ProfileSkills} from "../../components/ProfileSkills";

export const Profile = () => {
    return (
        <Wrapper>
            <ProfileAvatar imgPatch={myProfile.myPhotoPath}
                           name={myProfile.name}
                           role={myProfile.role}
                           social={myProfile.social}/>
            <ProfileParametersList parameters={myProfile.parameters}/>
            <ProfileSkills skills={myProfile.languages}/>
            <ProfileSkills skills={myProfile.skills}/>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
  min-height: 1315px;
  width: 305px;
  padding: 50px 45px 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
`