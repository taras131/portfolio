import React, {FC} from 'react';
import styled from "styled-components";
import {TContact} from "../../models/TContacts";
import {Icon} from "../../components/Icon";
import {NameWithValue} from "../../components/NameWithValue";
import {IconWrapper} from "../../components/IconWrapper";

type TProps = {
    contact: TContact
}

export const MyInfoListItem: FC<TProps> = ({contact}) => {
    const contactItemsList = contact.items.map(item => {
            return (<li key={item.id}>
                <NameWithValue
                    name={item.name}
                    value={item.value}/>
            </li>)
        }
    )
    return (
        <Wrapper>
            <IconWrapper isActive={true}>
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

const ContactItems = styled.ul`
  margin-top: 30px;

  li {
    margin-bottom: 16px;
  }
`;
