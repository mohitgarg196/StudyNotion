import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/ScrollToTop";
import swDev from "./swDev";

const store= configureStore({   // reducer is used for managing application's states such as user authentication, catching data fetched from database or external API's.
    reducer: rootReducer,       //rootReducer is a combined reducer of multiple reducers.
});
const root = ReactDOM.createRoot(document.getElementById("root"));      // ReactDOM's createRoot method to create a root entry point for a React application.
root.render(
    <Provider store={store}>        {/* to make the Redux store available to all components in the application. */}
    <BrowserRouter>         {/*  used for setting up routing in a React application */}
    <ScrollToTop/>           
    <App />             {/* main structure of the UI and typically contains other components, routes, and logic necessary */}
    <Toaster/>              {/* displaying toast notifications */}
    </BrowserRouter>
    </Provider>
);
swDev();        // This code registers a service worker for a web application. Service workers enable features like caching assets for offline use and improving performance. 