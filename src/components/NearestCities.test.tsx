import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import NearestCities from '@/components/NearestCities';

describe('NearestCities', () => {
    it('should render correctly when nearest cities are provided', () => {
        const nearestCities = ['Miami', 'Dakota', 'Miami Beach'];

        const { getByText } = render(<NearestCities nearestCities={nearestCities} />);

        const nearestCitiesTitle = getByText('Nearest Cities');
        expect(nearestCitiesTitle).toBeInTheDocument();

        nearestCities.forEach(city => {
            const cityElement = getByText(city);
            expect(cityElement).toBeInTheDocument();
        });
    });

    it('should not render anything when no nearest cities are provided', () => {
        const nearestCities: string[] = [];

        const { container } = render(<NearestCities nearestCities={nearestCities} />);

        expect(container.firstChild).toBeNull();
    });
});