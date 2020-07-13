// Checks to see if its currently night.
import axios from 'axios';

export const FetchWeather = async (setWeather, setSelectedDate, selectedDate, pos) => {
  const result = await axios(
  `http://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&units=metric&exclude=current, minuetly, hourly&appid=${process.env.REACT_APP_API_KEY}`
  );

  // Set current User state
  setWeather(result.data);
  setSelectedDate(result.data.daily[selectedDate])
};
// fetchWeather fetches data from the API and saves it into state
