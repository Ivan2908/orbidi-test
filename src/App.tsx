import React from 'react';
import { Typography, Container, useMediaQuery } from '@mui/material';
import CitySearch from '@/components/SearchCity';
import NearestCities from '@/components/NearestCities';
import CityList from '@/components/CityList';
import { useCitySearch } from '@/hooks/useSearchCities';
import '@/App.css';

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const { nearestCities, inputValue, filteredCities, error, handleInputChange, handleCitySelection } = useCitySearch();

  return (
    <div className="app" style={{ padding: isMobile ? '20px' : '' }}>
      <Container className="app-container" maxWidth="md">
        <Typography align="center" gutterBottom style={{ marginTop: '20px', marginBottom: '20px' }} variant="h4">
          Find Nearest City
        </Typography>
        <CitySearch error={error} handleInputChange={handleInputChange} inputValue={inputValue} />
        <CityList filteredCities={filteredCities} handleCitySelection={handleCitySelection} isMobile={isMobile} />
        <NearestCities nearestCities={nearestCities} />
      </Container>
    </div>
  );
};

export default App;