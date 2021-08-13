import axios from 'axios';
import config from "../context/config";

const endpoint = `${config.API_URL}/user`;

const getUser = () => (
    axios.get(endpoint)
);

export default getUser;
