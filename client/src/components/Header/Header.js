import {AppBar, Toolbar, makeStyles} from "@material-ui/core";
import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "white",
        flexGrow: 1,
    }
}));

export default function Header() {
    const {
        root
    } = useStyles();

    return (
        <AppBar className={root} position="sticky">
          <Toolbar>
            <Logo />
            <Menu />
            <User />
          </Toolbar>
        </AppBar>
    );
}
