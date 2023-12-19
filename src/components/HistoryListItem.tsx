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
            <HistoryHeader>
                <h3>{historyItem.name}</h3>
                <RoleAndDate>
                    <span>{historyItem.role}</span>
                    <TextInBox isWhite={true}>
                        {`${historyItem.dateStart} - ${historyItem.dateFinish}`}
                    </TextInBox>
                </RoleAndDate>
            </HistoryHeader>
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
  justify-content: space-between;
  gap: 10px;
  position: relative;
  
  @media ${({theme}) => theme.media.mobile} {
    flex-wrap: wrap;
  }
`

const HistoryHeader = styled.div`
  flex-grow: 1;

`;

const RoleAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 27px;
  flex-wrap: wrap;
  @media ${({theme}) => theme.media.mobile} {
    gap: 12px;
  }
`;

const Description = styled.div`
  max-width: 536px;
  width: 100%;
  flex-grow: 1;

  p {
    margin-top: 28px;
  }

  @media ${({theme}) => theme.media.mobile} {
    padding-top: 30px;
    p {
      margin-top: 10px;
    }
  }
`



