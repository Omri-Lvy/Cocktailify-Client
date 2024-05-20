import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SignupLoginModalProvider} from "./context/signup-login-modal-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SignupLoginModalProvider>
                <App/>
            </SignupLoginModalProvider>
        </BrowserRouter>
    </React.StrictMode>
);

