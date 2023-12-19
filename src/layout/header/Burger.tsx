import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type TProps = {
    handleClick: () => void
}

export const Burger:FC<TProps> = ({handleClick}) => {
    return (
        <Wrapper onClick={handleClick}>
            <span></span>
        </Wrapper>
    );
};

const Wrapper = styled.button`
  cursor: pointer;
  display: none;

  span {
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.accent};
    z-index: 900;
    position: absolute;
    left: 30px;
    top: 30px;
  }


  span::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(-10px);
  }

  span:after {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(10px);
  }

  @media ${theme.media.laptop} {
    display: block;
  }
`;