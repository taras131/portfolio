import React, {FC} from 'react';
import styled from "styled-components";
import {TParameter} from "../../models/TProfile";
import {TextInBox} from "../../components/TextInBox";

type TProps = {
    parameter: TParameter
}

export const ParametersListItem: FC<TProps> = ({parameter}) => {
    return (
        <Wrapper>
            <TextInBox fontSizePx={15}>
                {parameter.name}
            </TextInBox>
            <p>
                {parameter.value}
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme}) => theme.colors.textPrimary}
  }
`;


