// Checks to see if its currently night.
import axios from 'axios';

export const FetchWeather = async (setWeather, setCurrent, url) => {
  const result = await axios(url);

  // Set current User state
  setWeather(result.data);
  setCurrent(result.data.current);
};
// fetchWeather fetches data from the API and saves it into state
