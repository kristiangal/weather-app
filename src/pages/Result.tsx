import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import {
  WeatherInfo,
  ForecastInfo,
  ForecastRoot,
  LocationRoot,
  CurrentRoot,
  WeatherData,
} from "../types/types";

import { CircularProgress, Typography } from "@mui/material";

import BigResult from "../components/BigResult";
import SecondaryHeader from "../components/SecondaryHeader";

const Result = () => {
  const location = useLocation();
  const uri: string = location.state;

  const fetchWeatherInfo = async (): Promise<WeatherData> => {
    const result = await fetch(uri);
    const data = await result.json();
    if (!data) {
      throw new Error("No data fetched.");
    }
    const {
      current,
      location,
      forecast,
    }: {
      current: CurrentRoot;
      location: LocationRoot;
      forecast: ForecastRoot;
    } = data;

    const forecastInfo = forecast.forecastday
      .slice(1, forecast.forecastday.length)
      .map((day) => {
        const forecastInfo: ForecastInfo = {
          date: new Date(day.date),
          icon: day.day.condition.icon,
          temp: day.day.maxtemp_c,
        };
        return forecastInfo;
      });

    const mainInfo: WeatherInfo = {
      temp: Math.round(current.temp_c),
      name: location.name,
      condition: current.condition.text,
      icon: current.condition.icon,
      country: location.country,
      localtime: new Date(location.localtime),
    };
    return {
      main: mainInfo,
      forecast: forecastInfo,
    };
  };
  const { data, isLoading, isError } = useQuery(
    "weatherQuery",
    fetchWeatherInfo
  );

  if (isLoading) return <CircularProgress color="primary" />;

  if (isError)
    return (
      <div>
        <Typography variant="h2">Ooops...</Typography>
        <Typography variant="h5">Something went wrong</Typography>
      </div>
    );

  if (data) {
    return (
      <>
        <SecondaryHeader locationName={data.main.name} />
        <BigResult data={data.main} />
        <div className="foreacast">
          <Typography variant="h6" textAlign="center">
            2 day forecast
          </Typography>
          <div className="cardContainer"></div>
        </div>
      </>
    );
  }
};

export default Result;
