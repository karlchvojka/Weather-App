// Using browser geolocation, gets users lat/long
// Set position into state
export const GetPosition = (setPos) => {
  navigator.geolocation.getCurrentPosition(success => {
    const pos = [
      success.coords.latitude,
      success.coords.longitude
    ];
    console.log(pos)
    setPos(pos)
  }, failure => {
    if (failure.message.startsWith("Only secure origins are allowed")) {
    }
  });
};
