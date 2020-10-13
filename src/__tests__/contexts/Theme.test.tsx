import React from 'react';
import { RenderAPI, fireEvent } from '@testing-library/react-native';
import { useThemeHook } from '../../contexts/Theme';
import { renderHook, act } from '@testing-library/react-hooks';
import { mockCustomThemeProviderRender, MockTheme } from '../__mocks__/contexts/Theme';
import { THEME } from 'common';


describe('ThemeHook', () => {

    const { result, waitForNextUpdate } = renderHook(() => useThemeHook());

    it(`should be ${THEME.DEFAULT} by default`, () => {
        expect(result.current.theme).toEqual(THEME.DEFAULT)
    })


    it(`should be ${THEME.DARK} when setTheme has param of ${THEME.DARK}`, async () => {
        
        act(async () => {
            result.current.setTheme(THEME.DARK);
            await waitForNextUpdate();
            expect(result.current.theme).toEqual(THEME.DARK);
        });

    });

    it(`should be ${THEME.LIGHT} when setTheme has param of ${THEME.LIGHT}`, async () => {
        
        act(async () => {
            result.current.setTheme(THEME.LIGHT);
            await waitForNextUpdate();
            expect(result.current.theme).toEqual(THEME.LIGHT);
        });

    });
});

describe('ThemeProvider', () => {
  let wrapper: RenderAPI;
  const { result, waitForNextUpdate } = renderHook(() => useThemeHook());
  beforeEach(() => {
    const providerProps = {
      value: {
        theme: THEME.DEFAULT,
        setTheme: jest.fn((value) => {
          return THEME.DARK
        })
      }
    }
    wrapper = mockCustomThemeProviderRender(<MockTheme />, { providerProps })

  });

  it(`should have ${THEME.DEFAULT} by default`, () => {
    expect(wrapper.getAllByText(THEME.DEFAULT)).toHaveLength(1)
  });

  it('should have true when setTheme(!null)', async () => {
    act(async () => {
      fireEvent.press(wrapper.getByText("TOGGLE THEME"));
      await waitForNextUpdate();
      expect(wrapper.getAllByText(THEME.DARK)).toHaveLength(1)
    });
  });
})