import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {Icon} from "../../components/Icon";
import {navigation, spriteIds} from "../../utils/consts";
import {NavItem} from "./NavItem";

type TProps = {
    activeId: number
    handleActiveChange: (id: number) => () => void
    activeTheme: "light" | "dark",
    toggleActiveTheme: () => void
}

export const NavSideBar: FC<TProps> = ({
                                           activeId, handleActiveChange,
                                           activeTheme, toggleActiveTheme
                                       }) => {
    const navList = navigation.map(navItem => (<NavItem key={navItem.id}
                                                        iconId={navItem.iconId}
                                                        title={navItem.title}
                                                        isActive={activeId === navItem.id}
                                                        handleClick={handleActiveChange(navItem.id)}/>))
    return (
        <Wrapper activeTheme={activeTheme}>
            <button onClick={toggleActiveTheme} aria-label={"изменение темы"}>
                <Icon iconId={spriteIds.contrast} width={30} height={30}/>
            </button>
            <nav>
                <ul aria-label="Меню">
                    {navList}
                </ul>
            </nav>
        </Wrapper>
    );
};

type TWrapperProps = {
    activeTheme: "light" | "dark"
}

const Wrapper = styled.menu<TWrapperProps>`
  width: 108px;
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  top: 0;
  right: 0;

  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .4s ease;
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }

  button:hover {
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
  }

  ul {
    margin-top: 174px;
  }

  li {
    padding-bottom: 45px;
  }

  ${props => props.activeTheme === "dark" && css<TWrapperProps>`
    & button {
      transform: rotate(180deg);
    }
  `} @media ${({theme}) => theme.media.mobile} {
    position: fixed;
    top: calc(100vh - 80px);
    left: 0;
    right: 0;
    flex-direction: row;
    height: 80px;
    padding: 0 10px 0;
    width: 100vh;
    z-index: 9999;
    nav {
      width: calc(100vw - 100px);
      margin-left: 20px;
    }
    ul {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li {
      padding-bottom: 0;
    }
  }
`


