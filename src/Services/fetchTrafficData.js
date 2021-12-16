import axios from "axios";
const BASE_API = "https://camerapistage.globalvia.valerann.io/v1/segments/";

export const getTrafficData = async () => {
  const url = `${BASE_API}traffic?start_ts_milli=1639411155016&duration_milli=60000&average_period_milli=60000&dbname=ap53&APIKEY=yael`;
  const trafficData = await axios.get(url);
  return trafficData.data.traffic;
}

