declare function rdToWgs84(x: number | Array<number> | {x: number, y: number}, y: number | undefined): {lat: number, long: number};

declare function wgs84ToRd(lat: number | Array<number>, long: number | undefined): {x: number, y: number};

export = {rdToWgs84, wgs84ToRd};