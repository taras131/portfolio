import React, {useId, useState} from 'react';
import styled from "styled-components";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export const ContactsLeaveInfo = () => {
    const nameId = useId();
    const emailId = useId();
    const subjectId = useId();
    const messageId = useId();
    const [inputValues, setInputValues] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    })
    const handleChange = (e: any) => {
        setInputValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    return (
        <div>
            <h2>Leave us your info</h2>
            <Form>
                <div>
                    <label htmlFor={nameId}>Your Full Name ( Required)</label>
                    <Input name={"fullName"} id={nameId} value={inputValues.fullName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor={emailId}>Your Email ( Required)</label>
                    <Input name={"email"} id={emailId} value={inputValues.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor={subjectId}>Subject</label>
                    <Input name={"subject"} id={subjectId} value={inputValues.subject} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor={messageId}>Your Message</label>
                    <Input as={"textarea"}
                           rows={5}
                           name={"message"}
                           id={messageId}
                           value={inputValues.message}
                           onChange={handleChange}/>
                </div>
                <Button variant={"contained"}
                        borderRadiusPx={1}
                        fontSizePx={14}
                        fontWeight={600}
                        type={"submit"}>
                    SEND MESSAGE
                </Button>
            </Form>
        </div>
    );
};


const Form = styled.form`
  margin-top: 50px;
  min-height: 665px;
  padding: 25px;
  background-color: ${({theme}) => theme.colors.sectionBackgroundColor};

  div {
    padding-bottom: 25px;

    label {
      font-size: 18px;
      font-weight: 500;
      text-transform: capitalize;
      color: ${({theme}) => theme.colors.black.secondary};
    }

    input, textarea {
      margin-top: 8px;
      font-size: 16px;
    }

    textarea {
      height: 210px;
      padding: 12px;
      resize: none;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`