import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    isShowProfile: boolean
    handleClick: () => void
}

export const Burger: FC<TProps> = ({isShowProfile, handleClick}) => {
    return (
        <Wrapper onClick={handleClick} isShowProfile={isShowProfile}>
            <span></span>
        </Wrapper>
    );
};

type TWrapperProps = {
    isShowProfile: boolean
}

const Wrapper = styled.button<TWrapperProps>`
  cursor: pointer;
  display: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 9999;


  span {
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.accent};
    z-index: 900;

  }


  span::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(-7px);
  }

  span:after {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(7px);
  }

  @media ${({theme}) => theme.media.laptop} {
    display: ${props => props.isShowProfile ? "none" : "flex"};
    align-items: center;
    justify-content: center;
  }
`;