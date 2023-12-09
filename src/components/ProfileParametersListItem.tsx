import React, {FC} from 'react';
import styled from "styled-components";
import {TParameter} from "../models/TProfile";

type TProps = {
    parameter: TParameter
}

export const ProfileParametersListItem: FC<TProps> = ({parameter}) => {
    return (
        <Wrapper>
            <div>
                <Name>
                    {parameter.name}
                </Name>
            </div>
            <Value>
                {parameter.value}
            </Value>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

const Name = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  text-transform: capitalize;
`;
const Value = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  text-transform: capitalize;
`;

