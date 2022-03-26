import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import MainProvider from './Providers/MainProvider';
import LangProvider from './Providers/LangProvider';
import AuthPpovider from './Providers/AuthPpovider';
import Login from './componets/Login/Login';
import ThemeProvider from './Providers/MainProvider';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
                <LangProvider>
                    <AuthPpovider>
                            <App />
                    </AuthPpovider>
                </LangProvider>
            </ThemeProvider>
        </React.StrictMode>
        ,document.getElementById('root')
    );

reportWebVitals();
