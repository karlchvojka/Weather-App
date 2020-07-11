// Checks to see if its currently night.

export const IsNight = () => {
  var date = new Date();
  console.log(date.getHours())
  return (
    date.getHours() > 18 || date.getHours() < 6
  );
}
