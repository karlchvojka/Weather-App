// Checks to see if its currently night.

export const IsNight = () => {
  var date = new Date();

  return (
    date.getHours() > 22 || date.getHours() < 6
  );
}
