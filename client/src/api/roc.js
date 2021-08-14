import axios from 'axios';
import config from "../context/config";
import transformData from "../service/data";

const endpoint = `${config.API_URL}/roc`;

const getRoc = () => (
    axios.get(endpoint)
        .then(response => response.data)
        .then(data => transformData(data))
);

export default getRoc;
