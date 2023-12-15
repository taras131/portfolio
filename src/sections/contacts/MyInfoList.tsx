import React, {FC} from 'react';
import styled from "styled-components";
import {TContact} from "../../models/TContacts";
import {MyInfoListItem} from "./MyInfoListItem";

type TProps = {
    contacts: TContact []
}

export const MyInfoList: FC<TProps> = ({contacts}) => {
    const contactsList = contacts.map(contact => (<MyInfoListItem key={contact.id}
                                                                 contact={contact}/>))
    return (
        <Wrapper>
            {contactsList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 50px;
  min-height: 665px;
  width: 370px;
`;