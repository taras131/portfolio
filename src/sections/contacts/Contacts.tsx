import React, {FC} from 'react';
import styled from "styled-components";
import {MyInfo} from "./MyInfo";
import {LeaveInfo} from "./LeaveInfo";

export const Contacts: FC = () => {
    return (
        <Wrapper id={"contacts"}>
            <Contact>
                <LeaveInfo/>
                <MyInfo/>
            </Contact>
            <iframe title={"map"}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af23578cd56db01f0d7c892b8abf6123
                ac223f66658f27d49cb7e8507cb751b9a&amp;source=constructor"
                     frameBorder="0">
            </iframe>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding-top: 70px;
  
  iframe {
    margin-top: 70px;
    width: 100%;
    height: 300px;
  }
`
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`
