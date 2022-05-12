import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "src/UserContext";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";

if (process.env.REACT_APP_SHOW_DEV_TOOLS === "Y") {
    const { worker } = require("./mocks/browser");
    worker.start();
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <ToastContainer/>
            <App/>
        </UserContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
