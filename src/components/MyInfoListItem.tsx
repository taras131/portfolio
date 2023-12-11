import React, {FC} from 'react';
import styled from "styled-components";
import {TContact} from "../models/TContacts";
import {Icon} from "./Icon";
import {NameWithValue} from "./NameWithValue";

type TProps = {
    contact: TContact
}

export const MyInfoListItem: FC<TProps> = ({contact}) => {
    const contactItemsList = contact.items.map(item => (<NameWithValue key={item.id}
                                                                       name={item.name}
                                                                       value={item.value}/>))
    return (
        <Wrapper>
            <IconWrapper>
                <Icon iconId={contact.iconId}
                      width={18}
                      height={18}/>
            </IconWrapper>
            <ContactItems>{contactItemsList}</ContactItems>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
  margin-bottom: 20px;
  min-height: 210px;
  padding: 25px 25px 0 25px;
`;

const IconWrapper = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

const ContactItems = styled.ul`
  margin-top: 30px;
  & li {
    margin-bottom: 16px;
  }
`;
