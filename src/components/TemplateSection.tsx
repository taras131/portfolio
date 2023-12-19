import React, {FC} from 'react';
import styled from "styled-components";

type TProps = {
    sectionTitle: string,
    sectionDescription: string,
    children: React.ReactNode
}

export const TemplateSection: FC<TProps> = ({
                                                sectionTitle,
                                                sectionDescription,
                                                children
                                            }) => {
    return (
        <Wrapper>
            <SectionHeader>
                <h2>{sectionTitle}</h2>
                <p>{sectionDescription}</p>
            </SectionHeader>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding-top: 70px;
  width: 100%;
`
const SectionHeader = styled.div`
  max-width: 438px;
  margin: 0 auto;

  h2, p {
    text-align: center;
  }

  p {
    margin-top: 25px;
    margin-bottom: 50px;
  }
`
