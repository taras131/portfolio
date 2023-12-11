import styled from 'styled-components';
import {Main} from "../layout/Main";
import {Navigation} from "../layout/Navigation";
import {Profile} from "../layout/Profile";

export function App() {
    return (
        <Wrapper>
            <ContentWrapper>
                <Profile/>
                <Main/>
                <Navigation/>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
`