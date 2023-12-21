import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {spriteIds} from "../../utils/consts";

export const Footer = () => {
    return (
        <Wrapper>
            <Icon iconId={spriteIds.copyright} width={24} height={24}/>
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
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  @media ${({theme}) => theme.media.mobile} {
    margin-left: -15px;
    margin-right: -15px; 
  }
`;

