import styled from 'styled-components';
import {Main} from "../layout/main/Main";
import {NavSideBar} from "../layout/navSideBar/NavSideBar";
import {Profile} from "../layout/profileSideBar/Profile";
import React, {useEffect, useRef, useState} from "react";
import {navigation} from "../utils/consts";
import {Container} from "./Container";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";


export function App() {
    const [activeId, setActiveId] = useState(navigation[0].id)
    const homeRef = useRef<HTMLHeadingElement>(null);
    const portfolioRef = useRef<HTMLHeadingElement>(null);
    const contactsRef = useRef<HTMLHeadingElement>(null);
    const blogRef = useRef<HTMLHeadingElement>(null);
    const educationRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLHeadingElement>(null);
    const handleActiveChange = (id: number) => () => {
        switch (id) {
            case navigation[0].id:
                if (homeRef.current) homeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[1].id:
                if (priceRef.current) priceRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[2].id:
                if (educationRef.current) educationRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[3].id:
                if (portfolioRef.current) portfolioRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[4].id:
                if (blogRef.current) blogRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[5].id:
                if (contactsRef.current) contactsRef.current.scrollIntoView({behavior: "smooth"});
                break;
        }
        setActiveId(id)
    }
    const updateActiveId = () => {
        if (homeRef && homeRef.current && priceRef && priceRef.current
            && educationRef && educationRef.current && portfolioRef && portfolioRef.current
            && blogRef && blogRef.current && contactsRef && contactsRef.current) {
            const homeBorderTopY: number = Math.abs(homeRef.current.getBoundingClientRect().top - 70)
            const priceBorderTopY: number = Math.abs(priceRef.current.getBoundingClientRect().top - 70)
            const educationBorderTopY: number = Math.abs(educationRef.current.getBoundingClientRect().top - 70)
            const portfolioBorderTopY: number = Math.abs(portfolioRef.current.getBoundingClientRect().top - 70)
            const blogBorderTopY: number = Math.abs(blogRef.current.getBoundingClientRect().top - 70)
            const contactsBorderTopY: number = Math.abs(contactsRef.current.getBoundingClientRect().top - 70)
            const BordersTopYArr = [homeBorderTopY, priceBorderTopY, educationBorderTopY, portfolioBorderTopY,
                blogBorderTopY, contactsBorderTopY]
            const minValue = Math.min.apply(null, BordersTopYArr)
            switch (minValue) {
                case homeBorderTopY:
                    setActiveId(navigation[0].id)
                    break;
                case priceBorderTopY:
                    setActiveId(navigation[1].id)
                    break;
                case educationBorderTopY:
                    setActiveId(navigation[2].id)
                    break;
                case portfolioBorderTopY:
                    setActiveId(navigation[3].id)
                    break;
                case blogBorderTopY:
                    setActiveId(navigation[4].id)
                    break;
                case contactsBorderTopY:
                    setActiveId(navigation[5].id)
                    break;
            }
        }
    }
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const handleScroll = () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(updateActiveId, 100)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <Wrapper>
            <ContentWrapper>
                <Profile/>
                <Container ref={homeRef}>
                    <Header />
                    <Main refs={{portfolioRef, contactsRef, blogRef, educationRef, priceRef}}/>
                    <Footer/>
                </Container>
                <NavSideBar activeId={activeId} handleActiveChange={handleActiveChange}/>
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
