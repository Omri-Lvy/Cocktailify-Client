import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SignupLoginModalProvider} from "./context/signup-login-modal-context";
import {IsLoggedInProvider} from "./context/is-loggedin-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <IsLoggedInProvider>
                <SignupLoginModalProvider>
                    <App/>
                </SignupLoginModalProvider>
            </IsLoggedInProvider>
        </BrowserRouter>
    </React.StrictMode>
);

