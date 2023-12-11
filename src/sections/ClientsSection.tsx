import React from 'react';
import styled from "styled-components";
import {clients} from "../utils/consts";
import {Icon} from "../components/Icon";

export const ClientsSection = () => {
    const clientList = clients.map(client => (
        <li key={client.id}>
            <Icon iconId={client.iconId} height={140} width={140}/>
        </li>
    ))
    return (
        <Wrapper>
            {clientList}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

