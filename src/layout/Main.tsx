import React from 'react';
import {ServicesSection} from "../sections/ServicesSection";
import styled from "styled-components";
import {PricePlansSection} from "../sections/PricePlansSection";
import {RecommendationsSection} from "../sections/RecommendationsSection";
import {EducationSection} from "../sections/EducationSection";
import {WorkSection} from "../sections/WorkSection";
import {PortfolioSection} from "../sections/PortfolioSection";
import {BlogSection} from "../sections/BlogSection";
import {ContactsSection} from "../sections/ContactsSection";
import {ClientsSection} from "../sections/ClientsSection";
import {Footer} from "./Footer";
import {MainSection} from "../sections/MainSection";


export const Main = () => {
    return (
        <Wrapper>
            <MainSection/>
            <ServicesSection/>
            <PricePlansSection/>
            <RecommendationsSection/>
            <EducationSection/>
            <WorkSection/>
            <PortfolioSection/>
            <BlogSection/>
            <ContactsSection/>
            <ClientsSection/>
            <Footer/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 970px;
  width: 100%;
`
