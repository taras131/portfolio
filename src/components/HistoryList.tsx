import React, {FC} from 'react';
import {THistory} from "../models/THistory";
import styled from "styled-components";
import {HistoryListItem} from "./HistoryListItem";

type TProps = {
    history: THistory []
}

export const HistoryList: FC<TProps> = ({history}) => {
    const historyList = history.map(historyItem => (<HistoryListItem key={historyItem.id}
                                                                     historyItem={historyItem}/>))
    return (
        <Wrapper>
            {historyList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
`
