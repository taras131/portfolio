import React from 'react';
import styled from "styled-components";
import {Main} from "./Main";
import {myProfile, spriteIds} from "../../utils/consts";
import {ParametersList} from "./ParametersList";
import {ProfileSkills} from "./ProfileSkills";
import {ProfileExtraSkills} from "./ProfileExtraSkills";
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";

export const Profile = () => {
    return (
        <Wrapper>
            <Main profileMain={myProfile.main}/>
            <ParametersList parameters={myProfile.parameters}/>
            <ProfileSkills skills={myProfile.languages}/>
            <ProfileSkills skills={myProfile.skills}/>
            <ProfileExtraSkills extraSkills={myProfile.extraSkills}/>
            <Button variant={"contained"} borderRadiusPx={1} gapPx={20} fontWeight={600}>
                Download cv
                <Icon iconId={spriteIds.download} width={14} height={16}/>
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.article`
  min-height: 100vh;
  max-width: 305px;
  width: 100%;
  padding: 40px 45px 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  
  & > div::after, ul::after  {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    position: absolute;
    bottom: 0;
  }
`;