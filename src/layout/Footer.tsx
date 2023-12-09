import React from 'react';
import styled from "styled-components";
import {Icon} from "../components/Icon";
import {spriteIds} from "../utils/consts";

export const Footer = () => {
    return (
        <Wrapper>
            <Icon iconId={spriteIds.copyright} width={"24px"} height={"24px"}/>
            <p>2021 All Rights Reserved.Ojjomedia</p>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  & p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
  }
`;

