import React, {FC, LegacyRef} from 'react';
import {Services} from "../../sections/services/Services";
import styled from "styled-components";
import {PricePlans} from "../../sections/pricePlans/PricePlans";
import {RecommendationsSection} from "../../sections/RecommendationsSection";
import {EducationSection} from "../../sections/EducationSection";
import {WorkSection} from "../../sections/WorkSection";
import {PortfolioSection} from "../../sections/PortfolioSection";
import {BlogSection} from "../../sections/BlogSection";
import {ContactsSection} from "../../sections/ContactsSection";
import {ClientsSection} from "../../sections/ClientsSection";
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header";

type TProps = {
    refs: {
        homeRef: LegacyRef<HTMLDivElement>,
        portfolioRef: LegacyRef<HTMLDivElement>,
        contactsRef: LegacyRef<HTMLDivElement>,
        blogRef: LegacyRef<HTMLDivElement>,
        educationRef: LegacyRef<HTMLDivElement>,
        priceRef: LegacyRef<HTMLDivElement>
    }
}
export const Main: FC<TProps> = ({refs}) => {
    return (
        <Wrapper>
            <div ref={refs.homeRef}></div>
            <Header/>
            <Services/>
            <div ref={refs.priceRef}></div>
            <PricePlans/>
            <RecommendationsSection/>
            <div ref={refs.educationRef}></div>
            <EducationSection/>
            <WorkSection/>
            <div ref={refs.portfolioRef}></div>
            <PortfolioSection/>
            <div ref={refs.blogRef}></div>
            <BlogSection/>
            <div ref={refs.contactsRef}></div>
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
