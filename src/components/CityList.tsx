import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { VariableSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { City } from '@/types';

interface CityListProps {
    filteredCities: City[];
    isMobile: boolean;
    handleCitySelection: (city: string) => void;
}

const CityList: React.FC<CityListProps> = ({ filteredCities, isMobile, handleCitySelection }) => {
    const renderRow = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        const uniqueId = `${filteredCities[index].lng}_${filteredCities[index].lat}`;
        return (
            <ListItem data-testid={uniqueId} onClick={() => handleCitySelection(filteredCities[index].name)} style={style}>
                <ListItemText key={uniqueId} primary={filteredCities[index].name} />
            </ListItem>
        );
    };

    const listHeight = isMobile ? 200 : 300;

    return (
        <div data-testid="city-list" style={{ height: 300, width: '100%' }}>
            <AutoSizer>
                {({ height, width }) => (
                    <VariableSizeList
                        height={Math.min(listHeight, height)}
                        itemCount={filteredCities.length}
                        itemData={filteredCities}
                        itemSize={() => 50}
                        width={width}
                    >
                        {renderRow}
                    </VariableSizeList>
                )}
            </AutoSizer>
        </div>
    );
};

export default CityList;