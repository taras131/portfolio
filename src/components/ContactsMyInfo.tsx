import React from 'react';
import styled from "styled-components";
import {MyInfoList} from "./MyInfoList";
import {myContacts} from "../utils/consts";

export const ContactsMyInfo = () => {
    return (
        <Wrapper>
            <h2>Contact information</h2>
            <MyInfoList contacts={myContacts}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`

`


