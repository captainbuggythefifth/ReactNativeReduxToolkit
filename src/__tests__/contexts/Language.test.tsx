import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LANGUAGE } from 'common';
import { useLanguageHook } from 'contexts/Language';
import { fireEvent, RenderAPI } from '@testing-library/react-native';
import { mockCustomLanguageProviderRender, MockLanguage } from '__tests__/__mocks__/contexts/Language';


describe('LanguageHook', () => {

  const { result, waitForNextUpdate } = renderHook(() => useLanguageHook());

  it(`should be ${LANGUAGE.EN} by default`, () => {
    expect(result.current.language).toEqual(LANGUAGE.DEFAULT)
  });

  it(`should be ${LANGUAGE.NL} when setLanguage has param of ${LANGUAGE.NL}`, async () => {

    act(async () => {
      result.current.setLanguage(LANGUAGE.NL);
      await waitForNextUpdate();
      expect(result.current.language).toEqual(LANGUAGE.NL);
    });

  });

  it(`should be ${LANGUAGE.EN} when setLanguage has param of ${LANGUAGE.EN}`, async () => {

    act(async () => {
      result.current.setLanguage(LANGUAGE.EN);
      await waitForNextUpdate();
      expect(result.current.language).toEqual(LANGUAGE.EN);
    });

  });

  it(`should be ${LANGUAGE.AVAILABLE_LABELS_VALUES} by default`, () => {
    expect(result.current.availableLanguages).toEqual(LANGUAGE.AVAILABLE_LABELS_VALUES)
  });
});

describe('LanguageProvider', () => {
  let wrapper: RenderAPI;
  const { result, waitForNextUpdate } = renderHook(() => useLanguageHook());
  beforeEach(() => {
    const providerProps = {
      value: {
        language: LANGUAGE.DEFAULT,
        setLanguage: jest.fn((value) => {
          return LANGUAGE.NL
        })
      }
    }
    wrapper = mockCustomLanguageProviderRender(<MockLanguage />, { providerProps })

  });

  it(`should have ${LANGUAGE.DEFAULT} by default`, () => {
    expect(wrapper.getAllByText(LANGUAGE.DEFAULT)).toHaveLength(1)
  });

  it(`should have ${LANGUAGE.NL} by when selected`, async () => {
    act(async () => {
      fireEvent.press(wrapper.getByText("TOGGLE LANGUAGE"));
      await waitForNextUpdate();
      expect(wrapper.getAllByText(LANGUAGE.NL)).toHaveLength(1)
    });
  });
})

