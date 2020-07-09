export const GetPosition = (setUrl) => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const pos = [
      position.coords.latitude,
      position.coords.longitude
    ]
    setUrl(`http://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`);
  });
}
