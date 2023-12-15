import React, {FC} from 'react';
import styled from "styled-components";
import {TParameter} from "../../models/TProfile";
import {ParametersListItem} from "./ParametersListItem";

type TProps = {
    parameters: TParameter []
}

export const ParametersList: FC<TProps> = ({parameters}) => {
    const parametersList = parameters.map(parameter => (<ParametersListItem key={parameter.id}
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
`;

