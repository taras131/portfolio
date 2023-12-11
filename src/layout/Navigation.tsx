import React from 'react';
import styled from "styled-components";
import {Icon} from "../components/Icon";
import {spriteIds} from "../utils/consts";
import {NavigationItem} from "../components/NavigationItem";

export const Navigation = () => {
    return (
        <Wrapper>
            <Icon iconId={spriteIds.contrast} width={30} height={30}/>
            <nav>
                <ul>
                    <NavigationItem iconId={spriteIds.home} title={"Home"} isActive={true}/>
                    <NavigationItem iconId={spriteIds.code} title={"Code"}/>
                    <NavigationItem iconId={spriteIds.cv} title={"Education"}/>
                    <NavigationItem iconId={spriteIds.portfolio} title={"Portfolio"}/>
                    <NavigationItem iconId={spriteIds.blog} title={"Blog"}/>
                    <NavigationItem iconId={spriteIds.contact} title={"Contact"}/>
                </ul>
            </nav>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  height: 1315px;
  width: 108px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  & ul {
    margin-top: 174px;
  }

`


