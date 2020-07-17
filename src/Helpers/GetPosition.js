export const GetPosition = (setPos) => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const pos = [
      position.coords.latitude,
      position.coords.longitude
    ];
    setPos(pos)
  });
}
