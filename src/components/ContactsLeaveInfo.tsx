import React, {useId} from 'react';
import styled from "styled-components";
import {Input} from "./Input";
import {Button} from "./Button";
import {Textarea} from "./Textarea";

export const ContactsLeaveInfo = () => {
    const nameId = useId();
    const emailId = useId();
    const subjectId = useId();
    const messageId = useId();
    return (
        <Wrapper>
            <h2>Leave us your info</h2>
            <Content>
                <div>
                    <label htmlFor={nameId}>Your Full Name ( Required)</label>
                    <Input id={nameId} value={"asdgfs"}/>
                </div>
                <div>
                    <label htmlFor={emailId}>Your Email ( Required)</label>
                    <Input id={emailId} value={"asdgfs"}/>
                </div>
                <div>
                    <label htmlFor={subjectId}>Subject</label>
                    <Input id={subjectId} value={"asdgfs"}/>
                </div>
                <div>
                    <label htmlFor={messageId}>Your Message</label>
                    <Textarea id={messageId} value={"asdgfs"}/>
                </div>
                <Button variant={"contained"} borderRadius={"0px"}>
                    send message
                </Button>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`

`
const Content = styled.form`
  margin-top: 50px;
  min-height: 665px;
  padding: 25px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  & div {
    padding-bottom: 25px;

    & label {
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 123.6%; /* 22.248px */
      text-transform: capitalize;
      color: ${({theme}) => theme.colors.black.secondary};
    }

    & input {
      margin-top: 8px;
    }
  }
`