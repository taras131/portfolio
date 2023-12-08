import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/Theme.styled";
import {GlobalStyle} from "./styles/Global.styled";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
            <GlobalStyle/>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
