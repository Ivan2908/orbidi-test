import { expect, describe, test, vi } from 'vitest'
import { render } from '@testing-library/react';
import CitySearch from '@/components/SearchCity';

describe('CitySearch', () => {
    test('renders correctly with initial props', () => {
        const inputValue = '';
        const error = false;
        const handleInputChange = vi.fn();

        const { getByLabelText, queryByText } = render(
            <CitySearch error={error} handleInputChange={handleInputChange} inputValue={inputValue} />
        );

        expect(getByLabelText('Select a city to find a nearest cities')).toBeInTheDocument();
        expect(queryByText('No matching cities found')).toBeNull();
    });

    test('displays error message when error prop is true', () => {
        const inputValue = 'something different';
        const error = true;
        const handleInputChange = vi.fn();

        const { queryByText } = render(
            <CitySearch error={error} handleInputChange={handleInputChange} inputValue={inputValue} />
        );

        expect(queryByText('No matching cities found')).toBeInTheDocument();
    });
});
