import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    name: string
    value: string | number
}

export const NameWithValue: FC<TProps> = ({name, value}) => {
    return (
        <Wrapper>
            <span>{name}</span>
            <p>{value}</p>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`


