import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/icons/logo.svg?react";
import { Navbar } from "@components/Navbar";
import classes from "./Header.module.scss";

export const Header = () => {
  const menu = [
    { id: 0, name: "Popular", link: "/popular" },
    { id: 1, name: "Now Playing", link: "/now_playing" },
    { id: 2, name: "Top Rated", link: "/top_rated" },
    { id: 3, name: "Upcoming", link: "/upcoming" },
  ];
  return (
    <div className={classes.headerWrapper}>
      <Link to="/">
        <Logo width={150} />
      </Link>
      <Navbar menuItems={menu} />
    </div>
  );
};
