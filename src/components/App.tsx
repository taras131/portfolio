import styled, {ThemeProvider} from 'styled-components';
import {Main} from "../layout/main/Main";
import {NavSideBar} from "../layout/navSideBar/NavSideBar";
import {Profile} from "../layout/profileSideBar/Profile";
import React, {useEffect, useRef, useState} from "react";
import {navigation} from "../utils/consts";
import {Container} from "./Container";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Overlay} from "./Overlay";
import {darkTheme, theme} from "../styles/Theme.styled";
import {GlobalStyle} from "../styles/Global.styled";
import {Burger} from "../layout/header/Burger";


export function App() {
    const [activeId, setActiveId] = useState(navigation[0].id)
    const [isShowProfile, setIsShowProfile] = useState(false)
    const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light")
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
    const toggleIsShowProfile = () => {
        setIsShowProfile(prev => {
            if (homeRef.current) homeRef.current.scrollIntoView({behavior: "smooth"});
            return !prev
        })
    }
    const toggleActiveTheme = () => {
        setActiveTheme(prev => (prev === "dark" ? "light" : "dark"))
    }
    return (
        <ThemeProvider theme={activeTheme === "dark" ? darkTheme : theme}>
            <AppWrapper>
                <Burger isShowProfile={isShowProfile} handleClick={toggleIsShowProfile}/>
                <Profile isShowProfile={isShowProfile} toggleIsShowProfile={toggleIsShowProfile}/>
                <Container ref={homeRef}>
                    <Header/>
                    <Main refs={{portfolioRef, contactsRef, blogRef, educationRef, priceRef}}/>
                    <Footer/>
                </Container>
                <NavSideBar activeId={activeId} handleActiveChange={handleActiveChange}
                            activeTheme={activeTheme} toggleActiveTheme={toggleActiveTheme}/>

            </AppWrapper>
            <Overlay isShowProfile={isShowProfile}></Overlay>
        </ThemeProvider>
    );
}


const AppWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;

  @media screen and (max-width: 990px) {
    grid-template-columns: auto 1fr;
  }
  @media ${({theme}) => theme.media.mobile} {
    grid-template-columns: auto;
    padding-bottom: 80px;
  }
`
