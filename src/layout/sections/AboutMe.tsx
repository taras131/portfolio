import React from 'react';
import styled from "styled-components";
import myPhoto from "../../assets/images/my_photo.png";
import {FlexContainer} from "../../components/FlexContainer";
import {Button} from "../../components/Button";

export const AboutMe = () => {
    return (
        <AboutMeWrapper>
            <FlexContainer align={"center"} justify={"space-around"}>
                <div>
                    <h2>I’m Rayan Adlrdard</h2>
                    <h1><span>Front-end </span>Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque rutrum semper sed suspendisse nunc lectus.</p>
                    <Button variant={"contained"}>HIRE ME</Button>
                </div>
                <Photo src={myPhoto} alt="my_photo"/>
            </FlexContainer>
        </AboutMeWrapper>
    );
};

const AboutMeWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  padding: 0 60px;
  height: 467px;
`

const Photo = styled.img`
  width: 326px;
  height: 459px;
  object-fit: cover;
`