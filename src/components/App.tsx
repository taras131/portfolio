import styled from 'styled-components';
import {Main} from "../layout/Main";
import {Navigation} from "../layout/Navigation";
import {Profile} from "../layout/Profile";
import React, {useRef, useState} from "react";
import {navigation} from "../utils/consts";


export function App() {
    const [activeId, setActiveId] = useState(navigation[0].id)
    const mainRef = useRef<HTMLHeadingElement>(null);
    const portfolioRef = useRef<HTMLHeadingElement>(null);
    const contactsRef = useRef<HTMLHeadingElement>(null);
    const handleActiveChange = (id: number) => () => {
        switch (id) {
            case navigation[3].id:
                if (portfolioRef.current) portfolioRef.current.scrollIntoView({behavior: "smooth"});
                break;
        }
        setActiveId(id)
    }
    return (
        <Wrapper>
            <ContentWrapper>
                <Profile/>
                <Main refs={{mainRef, portfolioRef, contactsRef}}/>
                <Navigation activeId={activeId} handleActiveChange={handleActiveChange}/>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
`