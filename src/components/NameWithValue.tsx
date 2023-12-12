import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    name: string
    value: string | number
}

export const NameWithValue: FC<TProps> = ({name, value}) => {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Value>{value}</Value>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.colors.black.secondary}
`
const Name = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 123.6%; /* 22.248px */
  text-transform: capitalize;
`
const Value = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  text-transform: capitalize;
`
