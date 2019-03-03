const colors = require('colors');
const axios = require('axios');
const unirest = require('unirest');
let API_KEY = 'AIzaSyDntehhljfT8IwMcJajkbvMT79PIsDpqd0';
const getLugarLatLng = async(d, params) => {

    let encodedUrl = encodeURI(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${d}`);
    let response = await unirest.get(encodedUrl)
        .header("X-RapidAPI-Key", "e4f7314c50msh86ca330253a7ec2p1828b1jsn25fc18f8c166");
    if (response.statusCode !== 200) {
        throw new Error(`No hay resultados para '${d}'`);
    }
    let result = {
        description: d,
        lat: response.body.Results[0].lat,
        lon: response.body.Results[0].lon
    }
    return result;
}
module.exports = { getLugarLatLng };