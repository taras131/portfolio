import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {navigation, spriteIds} from "../../utils/consts";
import {NavItem} from "./NavItem";

type TProps = {
    activeId: number
    handleActiveChange: (id: number) => () => void
}

export const NavSideBar: FC<TProps> = ({activeId, handleActiveChange}) => {
    const navList = navigation.map(navItem => (<NavItem key={navItem.id}
                                                        iconId={navItem.iconId}
                                                        title={navItem.title}
                                                        isActive={activeId === navItem.id}
                                                        handleClick={handleActiveChange(navItem.id)}/>))
    return (
        <Wrapper>
            <Icon iconId={spriteIds.contrast} width={30} height={30}/>
            <nav>
                <ul>
                    {navList}
                </ul>
            </nav>
        </Wrapper>
    );
};


const Wrapper = styled.menu`
  height: 1315px;
  width: 108px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  ul {
    margin-top: 174px;
  }

`


