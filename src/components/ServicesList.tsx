import React, {FC} from 'react';
import {ServicesListItem} from "./ServicesListItem";
import styled from "styled-components";
import {TService} from "../models/TServices";

type TProps = {
    services: TService []
}

export const ServicesList: FC<TProps> = ({services}) => {
    const servicesList = services.map(service => (<ServicesListItem key={service.id}
                                                                    title={service.title}
                                                                    subtitle={service.subtitle}
                                                                    iconId={service.iconId}/>))
    return (
        <Wrapper>
            {servicesList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`