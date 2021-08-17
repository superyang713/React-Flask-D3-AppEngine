import {makeStyles} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const logo_url = "https://brandlab.monks.com/signatures/mark_pulse.gif";

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(2),
    },
}));

export default function LogoImg() {
    const {logo} = useStyles();
    return (
        <RouterLink to="/">
          <img alt="logo" className={logo} src={logo_url} height="50"/>
        </RouterLink>
    );
}
