import React from 'react';
import styled from "styled-components";

export const Burger = () => {
    return (
        <Wrapper>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({theme}) => theme.colors.accent};
  z-index: 900;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(-10px);
  }

  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.accent};
    transform: translateY(10px);
  }
`;