import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

export const Navbar = ({ menuItems }) => {
    return (
        <ul className={classes.menu}>
            {menuItems.map(menuItem => (
                <Link to={menuItem.link} className={classes.menuItem__link}>
                    <li key={menuItem.id} className={classes.menuItem}>
                        {menuItem.name}
                    </li>
                </Link>
            ))}
        </ul>
    );
};
