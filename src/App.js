import React from "react";
import "./App.css";
import Avthorization from "./components/Avthorization/Avthorization.jsx";
import Recruiter from "./components/Recruiter/Recruiter";
import Account_manager from "./components/Account_manager/Account_manager";
import { BrowserRouter } from "react-router-dom";


// import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div>

                {/* <Avthorization /> */}
                {/* <Recruiter /> */}
                <Account_manager />


            </div>
        </BrowserRouter>
    );
};

export default App;


