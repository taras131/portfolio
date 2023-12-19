import React, {FC, LegacyRef} from 'react';
import {Services} from "../../sections/services/Services";
import {PricePlans} from "../../sections/pricePlans/PricePlans";
import {Recommendations} from "../../sections/recommendations/Recommendations";
import {HistoryEducation} from "../../sections/historyEducation/HistoryEducation";
import {HistoryWork} from "../../sections/historyWork/HistoryWork";
import {Portfolio} from "../../sections/portfolio/Portfolio";
import {Blog} from "../../sections/blog/Blog";
import {Contacts} from "../../sections/contacts/Contacts";
import {Clients} from "../../sections/clients/Clients";

type TProps = {
    refs: {
        portfolioRef: LegacyRef<HTMLDivElement>,
        contactsRef: LegacyRef<HTMLDivElement>,
        blogRef: LegacyRef<HTMLDivElement>,
        educationRef: LegacyRef<HTMLDivElement>,
        priceRef: LegacyRef<HTMLDivElement>
    }
}
export const Main: FC<TProps> = ({refs}) => {
    return (
        <>
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
            <Clients/>
        </>
    );
};


