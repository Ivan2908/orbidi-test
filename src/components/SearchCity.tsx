import React from 'react';
import { TextField } from '@mui/material';
import { useDebouncedValue } from '@/hooks/useDebounce';

interface CitySearchProps {
    inputValue: string;
    error: boolean;
    handleInputChange: (value: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ inputValue, error, handleInputChange }) => {
    const debouncedValue = useDebouncedValue(inputValue, 25);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        handleInputChange(value);
    };
    return (
        <div>
            <TextField
                InputProps={{
                    style: { borderColor: error ? 'red' : undefined }
                }}
                error={error}
                fullWidth
                helperText={error ? "No matching cities found" : null}
                label="Select a city to find a nearest cities"
                margin="normal"
                onChange={handleChange}
                value={debouncedValue}
                variant="outlined"
            />
        </div>
    );
};

export default CitySearch;

