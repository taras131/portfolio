import React from 'react';
import styled from "styled-components";

export const RightSideBar = () => {
    return (
        <Wrapper>
            RightSideBar
        </Wrapper>
    );
};


const Wrapper = styled.div`
  height: 1315px;
  width: 108px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
`