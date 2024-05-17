import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css';

const HeaderComponent = () => {
    return (
        <div className={styles.Header}>
            <Link to={'users'}>users page</Link>
            <NavLink to={'/posts'}>posts page</NavLink>
            <NavLink to={'/comments'}>comments page</NavLink>
            <br/>
        </div>
    );
};

export default HeaderComponent;