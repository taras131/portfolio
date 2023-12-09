import React from 'react';
import styled from "styled-components";

export const Pagination = () => {
    return (
        <Wrapper>
            <span> </span>
            <span> </span>
            <span> </span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  width: 100%;

  & span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

