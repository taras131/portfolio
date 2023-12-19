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
  background-color: ${({theme}) => theme.colors.backgroundPrimary};

  li:not(:last-child)::after {
    content: "";
    display: block;
    height: 1.5px;
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 0;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    @media ${({theme}) => theme.media.mobile} {
      left: 0;
      right: 0;
    }
  }
`
