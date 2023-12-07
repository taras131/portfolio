import React from 'react';
import styled from "styled-components";

export const LeftSideBar = () => {
    return (
        <Wrapper>
            LeftSideBar
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 1315px;
  width: 305px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
`