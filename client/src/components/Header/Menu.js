import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const headersData = [{
  label: "About",
  href: "/about",
}];

const useStyles = makeStyles(() => ({
  menu: {
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    flexGrow: 1,
  },
}));

export default function Menu() {
  const {menu} = useStyles();
  return headersData.map(
    ({label, href}) => (
      <Button
        {...{
          className: menu,
          key: label,
          color: "inherit",
          to: href,
          component: RouterLink,
        }}
      >
        {label}
      </Button>
    )
  );
}
