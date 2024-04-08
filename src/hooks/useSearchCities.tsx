import { useState, useEffect } from 'react';
import citiesData from '@/utils/cities.json';
import { getDistance } from '@/utils/findNearestCity';
import { City } from '@/types';

interface CitySearchState {
    inputValue: string;
    filteredCities: City[];
    nearestCities: string[];
    error: boolean;
}

export const useCitySearch = () => {
    const [state, setState] = useState<CitySearchState>({
        inputValue: '',
        filteredCities: [],
        nearestCities: [],
        error: false,
    });

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            filteredCities: citiesData,
        }));
    }, []);

    const handleInputChange = (value: string) => {
        const filtered = citiesData.filter(city => city.name.toLowerCase().includes(value.toLowerCase()));
        setState(prevState => ({
            ...prevState,
            inputValue: value,
            filteredCities: filtered,
            nearestCities: [],
            error: filtered.length === 0 && value !== '',
        }));
    };

    const handleCitySelection = (city: string) => {
        const selectedCity = citiesData.find(c => c.name.toLocaleLowerCase() === city.toLocaleLowerCase());
        if (selectedCity) {
            const sortedCities = citiesData
                .filter(c => c.name.toLocaleLowerCase() !== city.toLocaleLowerCase())
                .map(c => ({ ...c, distance: getDistance(selectedCity, c) }))
                .sort((a, b) => a.distance - b.distance)
                .slice(0, 3)
                .map(c => c.name);
            setState(prevState => ({
                ...prevState,
                inputValue: city,
                nearestCities: sortedCities,
            }));
        }
    };
    return {
        ...state,
        handleInputChange,
        handleCitySelection,
    };
};
