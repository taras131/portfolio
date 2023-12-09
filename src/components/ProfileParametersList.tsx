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
`;

