import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {spriteIds} from "../../utils/consts";

type TProps = {
    extraSkills: string []
}

export const ProfileExtraSkills: FC<TProps> = ({extraSkills}) => {
    const extraSkillsList = extraSkills.map(extraSkill => {
        return (<li key={extraSkill}>
            <Icon iconId={spriteIds.doubleIcon} width={15} height={15}/>
            <p>{extraSkill}</p>
        </li>)
    })
    return (
        <Wrapper>
            <h2>Extra Skills</h2>
            <ul>
                {extraSkillsList}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 25px;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }

  ul {
    margin-top: 15px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 5px;
  }
  
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    position: absolute;
    bottom: 0;
  }
`;

