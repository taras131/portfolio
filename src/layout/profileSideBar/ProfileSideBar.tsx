import React from 'react';
import styled from "styled-components";
import {ProfileMain} from "../../components/ProfileMain";
import {myProfile, spriteIds} from "../../utils/consts";
import {ProfileParametersList} from "../../components/ProfileParametersList";
import {ProfileSkills} from "../../components/ProfileSkills";
import {ProfileExtraSkills} from "../../components/ProfileExtraSkills";
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";

export const ProfileSideBar = () => {
    return (
        <Wrapper>
            <ProfileMain profileMain={myProfile.main}/>
            <ProfileParametersList parameters={myProfile.parameters}/>
            <ProfileSkills skills={myProfile.languages}/>
            <ProfileSkills skills={myProfile.skills}/>
            <ProfileExtraSkills extraSkills={myProfile.extraSkills}/>
            <Button variant={"contained"} borderRadiusPx={0}>
                Download cv
                <Icon iconId={spriteIds.download} width={14} height={16}/>
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.article`
  min-height: 1315px;
  width: 305px;
  padding: 50px 45px 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  & button {
    gap: 20px;
  }


`