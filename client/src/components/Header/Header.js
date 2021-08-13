import {AppBar, Toolbar, Button, makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import getUser from "../../api/user";

const headersData = [{
    label: "About",
    href: "/about",
  },
  {
    label: "Plot",
    href: "/plot",
  }
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
  },
  menu: {
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "40px",
  },
}));

const logo_url = "https://brandlab.monks.com/signatures/mark_pulse.gif";

export default function Header() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUser().then(result => setUserData(result.data));
  }, []);

  const {header, menu} = useStyles();

  const display = () => {
    return (
      <Toolbar>
        {logoImg}
        {getMenuButtons()}
        {welcome}
      </Toolbar>
    );
  };

  const logoImg = (
    <RouterLink to="/">
      <img alt="logo" src={logo_url} height="50"/>
    </RouterLink>
  );

  const welcome = (
    <span className={menu}>{userData.name}</span>
  );

  const getMenuButtons = () => {
    return headersData.map(
      ({
        label,
        href
      }) => {
        return (
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
        );
      }
    );
  };

  return (
    <header>
      <AppBar className={header}>{display()}</AppBar>
    </header>
  );
}
