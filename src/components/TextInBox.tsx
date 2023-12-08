import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    text: string
}

export const TextInBox: FC<TProps> = ({text}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: inline-block;
  color: ${({theme}) => theme.colors.sectionBackgroundColor};
  background-color: ${({theme}) => theme.colors.primary};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  padding: 4px 7px;
`