import React, {FC} from 'react';
import {THistory} from "../models/THistory";
import styled from "styled-components";
import {TextInBox} from "./TextInBox";

type TProps = {
    historyItem: THistory
}

export const HistoryListItem: FC<TProps> = ({historyItem}) => {
    return (
        <Wrapper>
            <div>
                <h3>{historyItem.name}</h3>
                <Role>
                    <span>{historyItem.role}</span>
                    <TextInBox text={`${historyItem.dateStart} - ${historyItem.dateFinish}`}/>
                </Role>
            </div>
            <Description>
                <h4>{historyItem.discipline}</h4>
                <p>{historyItem.description}</p>
            </Description>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  min-height: 208px;
  padding: 30px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 5px;
`

const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 27px;
`

const Description = styled.div`
  max-width: 536px;
  width: 100%;
  
  p {
    margin-top: 28px;
  }
`
