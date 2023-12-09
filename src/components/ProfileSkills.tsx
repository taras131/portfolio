import React, {FC} from 'react';
import {TSkills} from "../models/TProfile";
import styled from "styled-components";
import {ProgressList} from "./ProgressList";

type TProps = {
    skills: TSkills
}

export const ProfileSkills: FC<TProps> = ({skills}) => {
    return (
        <Wrapper>
            <h2>{skills.title}</h2>
            <ProgressList progress={skills.progress}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;

  & h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }
`

