import React, { useEffect, useState } from "react";

const Statistics = ({ data }) => {
  const [statistics, setStatictics] = useState({});

  useEffect(() => {
    const calculatedData = data.reduce((acc, currentValue) => {
      return {
        ...acc,
        [currentValue.gender]: (acc[currentValue.gender] || 0) + 1,
        nationalities: {
          ...(acc.nationalities || {}),
          [currentValue.nat]: (acc[currentValue.nat] || 0) + 1
        }
      };
    }, {});
    setStatictics(calculatedData);
  }, [data]);

  return (
    <div className="">
      <h1>Statistics</h1>
      <div
        className=""
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignContent: "space-between"
        }}>
        <div className="" style={{ flexGrow: 1 }}>
          <h2>Collection size</h2>
          <p>{data.length}</p>
        </div>
        <div className="" style={{ flexGrow: 1 }}>
          <h2>Males</h2>
          <p>{statistics.male}</p>
        </div>
        <div className="" style={{ flexGrow: 1 }}>
          <h2>Females</h2>
          <p>{statistics.female}</p>
        </div>
        <div className="" style={{ flexGrow: 1 }}>
          <h2>Other</h2>
          <p>0</p>
        </div>
      </div>
      <div className="">
        <h2>Nationalities</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Statistics;
