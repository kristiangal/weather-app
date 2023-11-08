import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { WeatherInfo } from "../types/types";

import { Box, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";

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
      temp: current.temp_c,
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

  return (
    <Box>
      <Typography variant="h3" component="h2">
        {data?.name}
      </Typography>
      <Typography variant="h5" component="h3">
        {data?.country}
      </Typography>
      <img src={data?.icon} />
      <Typography variant="h5">{data?.condition}</Typography>
      <Typography variant="h2">{data?.temp} C</Typography>
    </Box>
  );
};

export default Result;
