import React, {FC, useCallback, useEffect} from 'react';
import styled from "styled-components";
import {ProfileMain} from "./ProfileMain";
import {myProfile, spriteIds} from "../../utils/consts";
import {ParametersList} from "./ParametersList";
import {ProfileSkills} from "./ProfileSkills";
import {ProfileExtraSkills} from "./ProfileExtraSkills";
import {Button} from "../../components/Button";
import {Icon} from "../../components/Icon";
import {theme} from "../../styles/Theme.styled";
import {Close} from "../../components/Close";

type TProps = {
    isShowProfile: boolean,
    toggleIsShowProfile: () => void
}

export const Profile: FC<TProps> = ({isShowProfile, toggleIsShowProfile}) => {
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') toggleIsShowProfile()
    }, [toggleIsShowProfile])
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    return (
        <Wrapper isShowProfile={isShowProfile}>
            <Close handleClick={toggleIsShowProfile}/>
            <ProfileMain profileMain={myProfile.main}/>
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

type TWrapper = {
    isShowProfile: boolean,
}

const Wrapper = styled.article<TWrapper>`
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
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  transition: 0.5s;
  z-index: 999;

  & > div::after, ul::after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    position: absolute;
    bottom: 0;
  }

  @media ${theme.media.laptop} {
    transform: ${props => props.isShowProfile ? "translateX(0)" : "translateX(-100%)"};
    position: absolute;
  }
`;
