import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app.component";
import { NominateProvider } from "./context/nominate.context";

ReactDOM.render(
    <React.StrictMode>
        <NominateProvider>
            <App />
        </NominateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
