import React, {useEffect, useState} from "react";
import LineChart from "../../components/LineChart/LineChart";
import getRoc from "../../api/roc";

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        getRoc()
            .then(data => setData(data));
    };

    const props = {
        width: 600,
        height: 600,
        data: data,
        margin: {
            left: 20,
            right: 30,
            top: 30,
            bottom: 30
        }
    };

    return (
        <div>
          <button onClick={changeData}>Update</button>
          <LineChart {...props} />
        </div>
    );
}
