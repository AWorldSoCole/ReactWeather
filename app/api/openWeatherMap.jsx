var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=22b2341b045ec0078eb6a66454afbdee&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else if (res.data.name.toLowerCase() !== location.toLowerCase()) {
        throw new Error("Invalid city input");
      } else {
        return (res.data.main.temp);
      }
    }, function (err) {
      throw new Error("Unable to fetch weather for that location.");
    });
  }
}