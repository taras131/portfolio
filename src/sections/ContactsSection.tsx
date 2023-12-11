import React from 'react';
import styled from "styled-components";
import {ContactsMyInfo} from "../components/ContactsMyInfo";
import {ContactsLeaveInfo} from "../components/ContactsLeaveInfo";

export const ContactsSection = () => {
    return (
        <Wrapper>
            <Contact>
                <ContactsLeaveInfo/>
                <ContactsMyInfo/>
            </Contact>
            <Map>

            </Map>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 70px;
`
const Contact = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
`
const Map = styled.div`
  margin-top: 70px;
  width: 100%;
  min-height: 300px;
  background-color: #ca9090;
`
