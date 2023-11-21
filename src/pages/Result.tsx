import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { WeatherInfo } from "../types/types";

import { Box, Typography } from "@mui/material";
import BigResult from "../components/BigResult";
import SecondaryHeader from "../components/SecondaryHeader";

const Result = () => {
  const location = useLocation();
  const uri: string = location.state;

  const fetchWeatherInfo = async (): Promise<WeatherInfo> => {
    const result = await fetch(uri);
    const data = await result.json();
    if (!data) {
      throw new Error("No data fetched.");
    }

    const { current, location, forecast } = data;

    const info: WeatherInfo = {
      temp: Math.round(current.temp_c),
      name: location.name,
      condition: current.condition.text,
      icon: current.condition.icon,
      country: location.country,
      localtime: location.localtime,
    };
    return info;
  };
  const { data, isLoading, isError } = useQuery(
    "weatherQuery",
    fetchWeatherInfo
  );

  if (isLoading) return <div>Loading...</div>;

  if (data) {
    return (
      <>
        <SecondaryHeader locationName={data.name} />
        <BigResult data={data} />
      </>
    );
  }
};

export default Result;
