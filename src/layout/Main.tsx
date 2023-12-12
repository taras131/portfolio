import React, {FC} from 'react';
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

type TProps = {
    refs: {
        mainRef: any,
        portfolioRef: any,
        contactsRef: any
    }
}

export const Main: FC<TProps> = ({refs}) => {
    return (
        <Wrapper>
            <MainSection />
            <ServicesSection/>
            <PricePlansSection/>
            <RecommendationsSection/>
            <EducationSection/>
            <WorkSection/>
            <PortfolioSection ref={refs.portfolioRef}/>
            <BlogSection />
            <ContactsSection />
            <ClientsSection/>
            <Footer/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 970px;
  width: 100%;
`
