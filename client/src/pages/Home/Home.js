import React, { useEffect, useState } from "react";
import LineChart from "../../components/LineChart/LineChart";
import getRoc from "../../api/roc";

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        getRoc().then(data => setData(data));
    };

  return (
    <div>
      <LineChart width={600} height={400} data={data}/>
    </div>
  );
}
