import { getDistance as getDistanceFromGeolib } from 'geolib';

interface City {
    lat: string;
    lng: string;
}

export const getDistance = (city1: City, city2: City): number => {
    const coord1 = { latitude: parseFloat(city1.lat), longitude: parseFloat(city1.lng) };
    const coord2 = { latitude: parseFloat(city2.lat), longitude: parseFloat(city2.lng) };
    return getDistanceFromGeolib(coord1, coord2);
};
