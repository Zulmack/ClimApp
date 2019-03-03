const unirest = require('unirest');
const KelvinToCelsius = (kelvin) => kelvin - 273.15;
const getClima = async(lat, lon) => {
    let encodedUrl = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38a9844bd312a100950aa31e4856f318`);
    let response = await unirest.get(encodedUrl);
    if (!response || response.status !== 200) {
        throw new Error(`No se ha podido obtener información de la latitud:${lat} longitud:${lon}`)
    }
    let result = {
        temp: KelvinToCelsius(response.body.main.temp),
        lat: lat,
        lon: lon,
        name: response.body.name
    }
    return result;
}
module.exports = { getClima }