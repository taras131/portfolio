import React from 'react';
import {AboutMe} from "../sections/AboutMe";
import {ServicesSection} from "../../components/ServicesSection";
import styled from "styled-components";
import {PricePlansSection} from "../../components/PricePlansSection";
import {RecommendationsSection} from "../../components/RecommendationsSection";
import {EducationSection} from "../../components/EducationSection";
import {WorkSection} from "../../components/WorkSection";
import {PortfolioSection} from "../../components/PortfolioSection";
import {BlogSection} from "../../components/BlogSection";
import {ContactsSection} from "../../components/ContactsSection";
import {ClientsSection} from "../../components/ClientsSection";
import {Footer} from "../Footer";

export const Main = () => {
    return (
        <Wrapper>
            <AboutMe/>
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
`
