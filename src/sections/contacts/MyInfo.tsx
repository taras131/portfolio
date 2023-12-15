import React from 'react';
import {MyInfoList} from "./MyInfoList";
import {myContacts} from "../../utils/consts";

export const MyInfo = () => {
    return (
        <div>
            <h2>Contact information</h2>
            <MyInfoList contacts={myContacts}/>
        </div>
    );
};



