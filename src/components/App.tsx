import styled from 'styled-components';
import {Main} from "../layout/main/Main";
import {RightSideBar} from "../layout/sidebars/RightSideBar";
import {LeftSideBar} from "../layout/sidebars/LeftSideBar";

export function App() {
    return (
        <Wrapper>
            <ContentWrapper>
                <LeftSideBar/>
                <Main/>
                <RightSideBar/>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`