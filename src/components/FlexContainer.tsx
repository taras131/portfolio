import React from 'react';
import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: "row" | "column",
    justify?: "center" | "space-between",
    align?: "center" | "flex-start",
    wrap?: "wrap" | "nowrap",
    gapPx?: number
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  flex-wrap: ${props => props.wrap || "wrap"};
  gap: ${props => props.gapPx ? props.gapPx + "px" : "20px"};
`;