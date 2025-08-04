import {rdToWgs84, wgs84ToRd} from "./index.js";

let testCoords = [51.8509, 6.6873];

console.log(wgs84ToRd(testCoords));
console.log(rdToWgs84(wgs84ToRd(testCoords)));
