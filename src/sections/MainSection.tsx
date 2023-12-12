import React, {FC} from 'react';
import styled from "styled-components";
import myPhoto from "../assets/images/my_photo.png";
import background from "../assets/images/mainBackground.png";
import {FlexContainer} from "../components/FlexContainer";
import {Button} from "../components/Button";
import {Icon} from "../components/Icon";
import {spriteIds} from "../utils/consts";


export const MainSection: FC = () => {
    return (
        <Wrapper>
            <Background src={background} alt="figures"/>
            <FlexContainer align={"center"} justify={"space-between"}>
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


        </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 0 60px;
  min-height: 467px;
  position: relative;

  & h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%; /* 59.328px */
    z-index: 1;
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
    z-index: 1;
  }
`

const Photo = styled.img`
  height: 100%;
  object-fit: cover;
  z-index: 1;
`

const Background = styled.img`
  position: absolute;
  padding-top: 10px;
  margin: 0 auto;
  z-index: 0;
`