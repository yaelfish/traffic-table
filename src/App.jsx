import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TrafficTable from "./Components/TrafficTable.jsx";
import { calculateAverage } from "./Utils/helper";
import { getTrafficData } from "./Services/fetchTrafficData";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trafficData, setTrafficData] = useState([]);
  const [averageSpeed, setAverageSpeed] = useState(0);

  useEffect(() => {
    const getDataToDisplay = async () => {
      try {
        const data = await getTrafficData();
        setTrafficData(data);
        const calcAverageSpeed = parseFloat(calculateAverage(data).toFixed(4));
        setAverageSpeed(calcAverageSpeed);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    getDataToDisplay();
  }, []);

  return (
    <Wrapper>
      <h1>Traffic Table</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Average Speed: {averageSpeed}</p>
          <TrafficTable trafficData={trafficData} />
        </>
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 1rem;

  h1,
  p {
    text-align: center;
  }
`;
