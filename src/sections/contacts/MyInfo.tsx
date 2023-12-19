import React from 'react';
import {MyInfoList} from "./MyInfoList";
import {myContacts} from "../../utils/consts";
import styled from "styled-components";

export const MyInfo = () => {
    return (
        <Wrapper>
            <h2>Contact information</h2>
            <MyInfoList contacts={myContacts}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 370px;
  width: 100%;
  flex-grow: 1;

`;
