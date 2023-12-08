import React, {FC} from 'react';
import {THistory} from "../models/THistory";
import styled from "styled-components";

type TProps = {
    historyItem: THistory
}

export const HistoryListItem:FC<TProps> = ({historyItem}) => {
    return (
        <Wrapper>
            <h3>{historyItem.name}</h3>
        </Wrapper>
    );
};

const Wrapper = styled.li`

`
