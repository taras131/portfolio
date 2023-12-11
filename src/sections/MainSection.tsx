import React from 'react';
import styled from "styled-components";
import myPhoto from "../assets/images/my_photo.png";
import {FlexContainer} from "../components/FlexContainer";
import {Button} from "../components/Button";
import {Icon} from "../components/Icon";
import {spriteIds} from "../utils/consts";

export const MainSection = () => {
    return (
        <AboutMeWrapper>
            <FlexContainer align={"center"} justify={"space-around"}>
                <div>
                    <h1>
                        I’m Taras Zverev
                        <span> Front-end </span>
                        Developer
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque rutrum semper sed suspendisse nunc lectus.
                    </p>
                    <Button variant={"contained"} borderRadius={"5px"} fontSize={16} height={"50px"}>
                        HIRE ME
                        <Icon iconId={spriteIds.arrow} height={16} width={16}/>
                    </Button>
                </div>
                <Photo src={myPhoto} alt="my_photo"/>
            </FlexContainer>
        </AboutMeWrapper>
    );
};

const AboutMeWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 0 60px;
  min-height: 467px;

  & h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%; /* 59.328px */
  }

  & span {
    color: ${({theme}) => theme.colors.accent};
  }

  & p {
    margin-top: 18px;
    margin-bottom: 25px;
    max-width: 424px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    text-transform: capitalize;
    font-kerning: none;
    font-feature-settings: 'calt' off;
    color: ${({theme}) => theme.colors.textSecondary}
  }
`

const Photo = styled.img`
  width: 326px;
  height: 459px;
  object-fit: cover;
`