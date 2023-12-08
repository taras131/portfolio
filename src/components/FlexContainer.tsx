import React from 'react';
import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
}

export const  FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  direction: ${props => props.direction || "row"};
  justify-content:  ${props => props.justify || "start"};
  align-items:  ${props => props.align || "stretch"};
  wrap: ${props => props.wrap || "nowrap"};
`