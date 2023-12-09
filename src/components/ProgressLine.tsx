import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    percent: number
}

export const ProgressLine: FC<TProps> = ({percent}) => {
    return (
        <Wrapper percent={percent}>

        </Wrapper>
    );
};

const Wrapper = styled.span<TProps>`
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 30px;
  border: 0.5px solid ${({theme}) => theme.colors.primary};

  &:after {
    display: block;
    content: "";
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
    width: ${props => props.percent}%;
  }
`

