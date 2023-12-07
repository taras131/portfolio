import React from 'react';
import {AboutMe} from "../sections/AboutMe";
import {ServicesSection} from "../../components/ServicesSection";
import styled from "styled-components";
import {PricePlansSection} from "../../components/PricePlansSection";
import {RecommendationsSection} from "../../components/RecommendationsSection";
import {EducationSection} from "../../components/EducationSection";
import {WorkSection} from "../../components/WorkSection";

export const Main = () => {
    return (
        <Wrapper>
            <AboutMe/>
            <ServicesSection/>
            <PricePlansSection/>
            <RecommendationsSection/>
            <EducationSection/>
            <WorkSection/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 970px;
`
