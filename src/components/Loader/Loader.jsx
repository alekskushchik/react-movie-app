import React from "react";
import Spinner from "@assets/spinner.svg?react";
import classes from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spinner />
    </div>
  );
};
