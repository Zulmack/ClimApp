const rs = require('./request-service');
const clima = require('./clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: false
    },
    lat: {
        alias: 'a',
        desc: 'Latitud',
        demand: false
    },
    lon: {
        alias: 'o',
        desc: 'Longitud',
        demand: false
    }
}).argv;



console.log('Direccion', argv.direccion);
(async() => {
    let latlng = await rs.getLugarLatLng(argv.d);
    let temp = await clima.getClima(latlng.lat, latlng.lon)
        // console.log(temp);
    console.log(`La temperatura de ${argv.d} es: ${temp.temp}.`);
})();