import {makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import getUser from "../../api/user";

const useStyles = makeStyles(() => ({
    user: {
        color: "black",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
    },
}));

export default function User() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        getUser()
            .then(result => setUserData(result.data));
    }, []);

    const {user} = useStyles();

    return (
        <span className={user}>{`Welcome ${userData.name}`}</span>
    );
}
