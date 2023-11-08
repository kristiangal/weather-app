export const getBaseWeatherUri = (): string => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const uri = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=5`;
  return uri;
};
