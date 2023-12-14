import React, {FC} from 'react';
import styled from "styled-components";
import {ContactsMyInfo} from "./ContactsMyInfo";
import {ContactsLeaveInfo} from "./ContactsLeaveInfo";

export const Contacts: FC = () => {
    return (
        <Wrapper>
            <Contact>
                <ContactsLeaveInfo/>
                <ContactsMyInfo/>
            </Contact>
            <iframe title={"map"}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Af23578cd56db01f0d7c892b8abf6123
                ac223f66658f27d49cb7e8507cb751b9a&amp;source=constructor"
                width="970" height="300" frameBorder="0">
            </iframe>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 70px;

  iframe {
    margin-top: 70px;
  }
`
const Contact = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
`
