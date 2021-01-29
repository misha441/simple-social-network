import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (<div className={s.navbar}>
            <nav className={s.nav}>
                <li className={s.navContent}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={`${s.navContent} ${s.active}`}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={`${s.navContent} ${s.active}`}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </li>
                <li className={s.navContent}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.navContent}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.navContent}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </li>
            </nav>
        </div>
    );
}

export default Navbar;