import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    sectionTitle: string,
    sectionDescription: string,
    children: React.ReactNode
    ref?: any
}

export const TemplateSection: FC<TProps> = ({sectionTitle, sectionDescription, children, ref}) => {
    return (
        <Wrapper ref={ref}>
            <Title>
                <h2>{sectionTitle}</h2>
                <p>{sectionDescription}</p>
            </Title>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding-top: 70px;
`
const Title = styled.div`
  max-width: 438px;
  margin: 0 auto;

  & h2, p {
    text-align: center;
  }

  & h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%; /* 39.552px */
    text-transform: capitalize;
  }

  & p {
    margin-top: 25px;
    margin-bottom: 50px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.textSecondary}
  }
`
