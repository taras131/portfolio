import React, {FC} from 'react';
import styled from "styled-components";
import {ContactsMyInfo} from "../components/ContactsMyInfo";
import {ContactsLeaveInfo} from "../components/ContactsLeaveInfo";

export const ContactsSection: FC = () => {
    return (
        <Wrapper>
            <Contact>
                <ContactsLeaveInfo/>
                <ContactsMyInfo/>
            </Contact>
            <iframe title={"map"}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af23578cd56db01f0d7c892b8abf6123ac223f6665
                    8f27d49cb7e8507cb751b9a&amp;source=constructor"
                    width="970" height="300" frameBorder="0"></iframe>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 70px;

  & iframe {
    margin-top: 70px;
  }
`
const Contact = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;

  & h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%; /* 39.552px */
    text-transform: capitalize;
  }

`
