import React, {FC} from 'react';
import {TProgress} from "../models/TProfile";
import styled from "styled-components";
import {ProgressListItem} from "./ProgressListItem";

type TProps = {
    progress: TProgress []
}

export const ProgressList: FC<TProps> = ({progress}) => {
    const progressList = progress.map(progressItem => (<ProgressListItem key={progressItem.id}
                                                                         progressItem={progressItem}/>))
    return (
        <Wrapper>
            {progressList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;


