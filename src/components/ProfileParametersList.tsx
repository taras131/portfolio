import React, {FC} from 'react';
import styled from "styled-components";
import {TParameter} from "../models/TProfile";
import {ProfileParametersListItem} from "./ProfileParametersListItem";

type TProps = {
    parameters: TParameter []
}

export const ProfileParametersList: FC<TProps> = ({parameters}) => {
    const parametersList = parameters.map(parameter => (<ProfileParametersListItem key={parameter.id}
                                                                                   parameter={parameter}/>))
    return (
        <Wrapper>
            {parametersList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding-bottom: 25px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    position: absolute;
    bottom: 0;
  }
`;

