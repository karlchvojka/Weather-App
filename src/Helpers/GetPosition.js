import IPinfoWrapper from "node-ipinfo";
import axios from 'axios';

let token = "ae9915c8a88809"
let ip = "8.8.8.8"
let asn = "AS7922";
const ipinfoWrapper = new IPinfoWrapper(token);
let http = require('http');

const FetchApi = async () => {
  const result = await axios(
  `https://api.ipify.org`
  );
  return ip = result.data
};

FetchApi(ip);
console.log('here', ip);

// Using browser geolocation, gets users lat/long
// Set position into state
export const GetPosition = (setPos) => {
  navigator.geolocation.getCurrentPosition(success => {
    const pos = [
      success.coords.latitude,
      success.coords.longitude
    ];
    setPos(pos)
  }, failure => {
    if (failure.message.startsWith("Only secure origins are allowed")) {
    }
  });
};
