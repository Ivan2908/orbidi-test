import { renderHook, act } from '@testing-library/react';
import { useCitySearch } from '@/hooks/useSearchCities';
import { expect, describe, test } from 'vitest'

describe('useCitySearch', () => {
  test('should update list of filter cities when change input', () => {
    const { result } = renderHook(() => useCitySearch());

    act(() => {
      result.current.handleInputChange('Miami');
    });

    expect(result.current.filteredCities).toHaveLength(20);
  });
});
