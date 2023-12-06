import styled from 'styled-components';


function App() {
    return (
        <Wrapper className="App">
            <Title>Hi i`m Taras</Title>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.colors.backgroundColor};
  min-height: 100vh;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;