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
  height: 208px;
  padding: 30px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }
`

const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 27px;

  & span {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }
`

const Description = styled.div`
  max-width: 536px;
  width: 100%;

  & h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }

  & p {
    margin-top: 28px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.textSecondary};
  }
`
