// fetchWeather fetches data from the API and saves it into state
import axios from 'axios';

export const FetchWeather = async (setWeather, selectedDate, pos) => {
  const result = await axios(
  `http://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&units=metric&exclude=current&appid=${process.env.REACT_APP_API_KEY}`
  );
  console.log(result.data)
  // Set Weather info into state, set selected date.
  setWeather(result.data);
};
