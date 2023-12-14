import React from 'react';
import styled from "styled-components";
import {MyInfoList} from "../../components/MyInfoList";
import {myContacts} from "../../utils/consts";

export const ContactsMyInfo = () => {
    return (
        <div>
            <h2>Contact information</h2>
            <MyInfoList contacts={myContacts}/>
        </div>
    );
};



