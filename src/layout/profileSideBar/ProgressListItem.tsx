import React, {FC} from 'react';
import {TProgress} from "../../models/TProfile";
import styled from "styled-components";
import {NameWithValue} from "../../components/NameWithValue";
import {ProgressLine} from "./ProgressLine";

type TProps = {
    progressItem: TProgress
}

export const ProgressListItem: FC<TProps> = ({progressItem}) => {
    return (
        <Wrapper>
            <NameWithValue name={progressItem.name} value={`${progressItem.percent}%`}/>
            <ProgressLine percent={progressItem.percent}/>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

