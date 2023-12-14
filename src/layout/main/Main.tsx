import React, {FC, LegacyRef} from 'react';
import {Services} from "../../sections/services/Services";
import styled from "styled-components";
import {PricePlans} from "../../sections/pricePlans/PricePlans";
import {Recommendations} from "../../sections/recommendations/Recommendations";
import {HistoryEducation} from "../../sections/historyEducation/HistoryEducation";
import {HistoryWork} from "../../sections/historyWork/HistoryWork";
import {Portfolio} from "../../sections/portfolio/Portfolio";
import {Blog} from "../../sections/blog/Blog";
import {Contacts} from "../../sections/contacts/Contacts";
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
            <Recommendations/>
            <div ref={refs.educationRef}></div>
            <HistoryEducation/>
            <HistoryWork/>
            <div ref={refs.portfolioRef}></div>
            <Portfolio/>
            <div ref={refs.blogRef}></div>
            <Blog/>
            <div ref={refs.contactsRef}></div>
            <Contacts/>
            <ClientsSection/>
            <Footer/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 970px;
  width: 100%;
`
