import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    sectionTitle: string,
    sectionDescription: string,
    children: React.ReactNode
}

export const TemplateSection: FC<TProps> = ({sectionTitle, sectionDescription, children}) => {
    return (
        <Wrapper>
            <Title>
                <h2>{sectionTitle}</h2>
                <p>{sectionDescription}</p>
            </Title>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 70px;
`
const Title = styled.div`
  max-width: 438px;
  margin: 0 auto;

  & h2, p {
    text-align: center;
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
