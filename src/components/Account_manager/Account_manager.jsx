import React from 'react';
import s from './Account_manager.module.css';
import Client from './Nav_icon/Client'
import Recruiter from './Nav_icon/Recruiter'
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";


const Account_manager = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.link}>
                    <NavLink to="/Client" activeClassName={s.active}> Client </NavLink >
                </div>
                <div className={s.link}>
                    <NavLink to="/Recruiter" activeClassName={s.active}>Recruiter </NavLink >
                </div>
                <div className={s.link}>
                    <NavLink to="/">Account_manager </NavLink >
                </div>
                <div className={s.link}>
                    <NavLink to="/">History</NavLink >
                </div>
            </nav>
            <div>
                <Route path='/Client' component={Client} />
                <Route path='/Recruiter' component={Recruiter} />





            </div>
        </div>





    );
}
export default Account_manager;